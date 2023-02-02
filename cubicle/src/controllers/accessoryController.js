const router = require("express").Router();
const Accessory = require("../models/Accessory");

router.get("/create", (req, res) => {
  res.render("accessory/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;

  await Accessory.create({ name, description, imageUrl });

  res.redirect("/");
});

router.get("/attach", (req, res) => {
  res.render("accessory/attach");
});

router.get("/create/:accessoryId", (req, res) => {
  res.send(`Hi, there number ${req.params.accessoryId}`);
});

module.exports = router;
