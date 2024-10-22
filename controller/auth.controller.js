const Users = require("../model/users.model");
const chiperline = require("chiperline");
const chiper = new chiperline(process.env.SECRET_KEY_ENC || "SECRETKEYENV");

function isTrustedDomain(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return false;
  }
  const domain = email.split("@")[1];
  const trustedDomains = ["livecst.com", "gmail.com"];
  return trustedDomains.includes(domain);
}

exports.registerUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (user)
      return res.json({ status: false, message: "Account already created" });
    if (!isTrustedDomain(email))
      return res.status(500).json({
        status: false,
        code: 500,
        message: "Unauthorize domain",
        data: {},
      });
    req.body.password = chiper.encrypt(req.body.password);
    await Users.create(req.body);
    res.status(201).json({
      status: true,
      code: 201,
      message: "Account Success created!",
      data: {},
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, code: 500, message: error, data: {} });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (user && chiper.compare(password, user.password)) {
      res.status(200).json({
        status: true,
        code: 200,
        message: "Loginned Successfully",
        data: chiper.encrypt(
          JSON.stringify({
            email: email,
            username: user.username,
            expire: (Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60) * 1000,
          })
        ),
        data: {},
      });
    } else {
      res.status(403).json({
        status: false,
        code: 403,
        message: "Account Not Found / Incorrect Password",
        data: {},
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, code: 500, message: error, data: {} });
  }
};
