const express = require("express");

const router = express.Router();

const robots = [
  {
    id: "627e96883ccb21d8cae171b3",
    name: "Optimus Prime",
    image:
      "https://pm1.narvii.com/7617/0e3da39327724c32a5639bae88d64ad9c60dfecer1-752-1131v2_hq.jpg",
    speed: "5",
    resistance: "7",
    creation: { $date: { $numberLong: "94694400000" } },
  },
  {
    id: "627e96883ccb21d8cae171b3",
    name: "Optimus Prime",
    image:
      "https://pm1.narvii.com/7617/0e3da39327724c32a5639bae88d64ad9c60dfecer1-752-1131v2_hq.jpg",
    speed: "5",
    resistance: "7",
    creation: "1973",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ robots });
});

module.exports = router;
