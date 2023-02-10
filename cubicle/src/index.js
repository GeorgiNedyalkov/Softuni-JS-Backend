const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const config = require("./config");
const setupViewEngine = require("./config/viewEngine");
const initDatabase = require("./config/databaseInit");
const morgan = require("morgan");
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();
setupViewEngine(app);

app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("common"));
app.use(authMiddleware.authentication);
app.use(routes);

initDatabase()
  .then(() =>
    app.listen(config.PORT, () => {
      console.log(`Server is running on port: ${config.PORT}...`);
    })
  )
  .catch((err) => {
    console.error(err.message);
  });
