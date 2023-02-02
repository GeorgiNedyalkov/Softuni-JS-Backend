const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("accessory/create");
});

router.get("/attach", (req, res) => {
  res.render("accessory/attach");
});

router.get("/create/:accessoryId", (req, res) => {
  res.send(`Hi, there number ${req.params.accessoryId}`);
});

module.exports = router;
