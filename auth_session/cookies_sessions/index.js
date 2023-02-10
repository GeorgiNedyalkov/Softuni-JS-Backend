const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const morgan = require("morgan");
const dataService = require("./dataService");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  expressSession({
    secret: "secret: it is good to be generated and in a env variable",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send(`
  <h1>Home Page</h1>
  <p><a href="/login">Login</a></p>
  <p><a href="/profile">Profile</a></p>
  <p><a href="/register">Register</a></p>
  <p><a href="/logout">Logout</a></p>
  `);
});

app.get("/login", (req, res) => {
  res.send(`
        <h1>Sign In</h1>
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

app.get("/register", (req, res) => {
  res.send(`
        <h1>Sign Up</h1>
        <form method="POST">
            <label for="username" name="username" id="username">
            Username
                <input type="text" name="username">
            </label>
            <label for="password" name="password" id="password">
            Password
                <input type="password" name="password">
            </label>
            <input type="submit" value="register">
        </form>
  `);
});

app.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  await dataService.registerUser(username, password);
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await dataService.loginUser(username, password);

    res.cookie("token", token, { httpOnly: true });
    // req.session.username = user.username;
    // req.session.privateInfo = user.password;
  } catch (error) {
    console.log(error);
    res.status(401).end();
  }
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
