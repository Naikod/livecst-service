const Roles = require("../model/roles.model");

exports.roleAdd = async (req, res) => {
  try {
    await Roles.create(req.body);
    res
      .status(201)
      .json({
        status: true,
        code: 201,
        message: "Role Success created!",
        data: {},
      });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, code: 500, message: error, data: {} });
  }
};
