const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send(`
  <h1>Home Page</h1>
  <p><a href="/login">Login</a></p>
  <p><a href="/profile">Profile</a></p>
  `);
});

app.get("/login", (req, res) => {
  res.send(`
        <form method="POST">
            <label for="username" name="username" id="username">
            Username
                <input type="text" name="username">
            </label>
            <label for="password" name="password" id="password">
            Password
                <input type="password" name="password">
            </label>
            <input type="submit" value="login">
        </form>
    `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "Ivan" && password == "peti") {
    const authData = {
      username: "Ivan",
    };
    res.cookie("auth", JSON.stringify(authData));
    return res.redirect("/");
  }

  res.status(401).end();
});

app.get("/profile", (req, res) => {
  const authData = req.cookies["auth"];

  if (!authData) {
    res.status(401).end();
  }

  const { username } = JSON.parse(authData);

  res.send(`
    <h2>Hello - ${username}</h2>
  `);
});

app.listen(port, () => {
  console.log(`Server is running...`);
});
