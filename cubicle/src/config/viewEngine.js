const handlebars = require("express-handlebars");

function setupViewEngine(app) {
  app.engine(
    "hbs",
    handlebars.engine({
      // change extention name to hbs
      extname: "hbs",
    })
  );
  app.set("view engine", "hbs");
  app.set("views", "./src/views"); // set folder to be ./src/views
}

module.exports = setupViewEngine;
