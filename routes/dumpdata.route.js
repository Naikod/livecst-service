const express = require("express");
const router = express.Router();

router.get("/lp-data", (req, res) => {
  try {
    res.status(200).json({
      status: true,
      code: 200,
      message: "Data Received",
      data: {
        offers: [
          {
            name: "Pro",
            price: "$30 / Month",
            feature: [
              { name: "Website & Mobile Optimized", unlock: true },
              { name: "Life-time Free Usage", unlock: true },
              { name: "Software Update", unlock: true },
              { name: "6 Month Support", unlock: true },
              { name: "No Installation Charges", unlock: false },
              { name: "Inbuilt Malware Scanner", unlock: false },
            ],
          },
          {
            name: "Best",
            price: "$79.99 / Month",
            feature: [
              { name: "Website & Mobile Optimized", unlock: true },
              { name: "Life-time Free Usage", unlock: true },
              { name: "Software Update", unlock: true },
              { name: "6 Month Support", unlock: true },
              { name: "No Installation Charges", unlock: true },
              { name: "Inbuilt Malware Scanner", unlock: false },
            ],
          },
          {
            name: "Enterprise",
            price: "$149.99 / Month",
            feature: [
              { name: "Website & Mobile Optimized", unlock: true },
              { name: "Life-time Free Usage", unlock: true },
              { name: "Software Update", unlock: true },
              { name: "6 Month Support", unlock: true },
              { name: "No Installation Charges", unlock: true },
              { name: "Inbuilt Malware Scanner", unlock: true },
            ],
          },
        ],
      },
    });
  } catch (error) {
    res.json({
      status: false,
      code: 500,
      message: error.message,
      data: {},
    });
  }
});

module.exports = router;
