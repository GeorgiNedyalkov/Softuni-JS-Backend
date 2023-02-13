const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");
const { getOne } = require("../services/cubeService");
const cubeUtils = require("../utils/cubeUtils");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  let cube = new Cube({ name, description, imageUrl, difficultyLevel });

  await cube.save();
  res.redirect("/");
};

exports.getCubeDetails = async (req, res) => {
  const cube = await Cube.findById(req.params.cubeId).lean();

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("cube/details", { cube });
};

exports.getAttachAccessory = async (req, res) => {
  const cube = await Cube.findById(req.params.cubeId).lean();
  const accessories = await Accessory.find().lean();
  res.render("cube/attach", { cube, accessories });
};

exports.getEditCube = async (req, res) => {
  const cube = await getOne(req.params.cubeId).lean();
  const difficultyLevels = cubeUtils.generateDifficultyLevels(
    cube.difficultyLevel
  );

  console.log(difficultyLevels);

  res.render("cube/edit", { cube, difficultyLevels });
};

exports.getDeleteCube = async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean();
  const difficultyLevels = cubeUtils.generateDifficultyLevels(
    cube.difficultyLevel
  );

  res.render("cube/delete", { cube, difficultyLevels });
};
