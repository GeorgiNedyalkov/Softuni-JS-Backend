const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send(`
        <form method="POST">
            <label for="username" name="username" id="username">
                <input type="text" name="username">
                Username
            </label>
            <label for="password" name="password" id="password">
                <input type="text" name="password">
                Password
            </label>
            <input type="submit" value="login">
        </form>
    `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "Ivan" && password == "peti") {
    // success
    // set cookie and enter profile page
  }

  // fail
  res.status(401).end(); // status 401 unauthorized
});

app.get("/profile", (req, res) => {
  // check if user is logged
  // if not 401
  // if yes return name
});

app.listen(port, () => {
  console.log(`Server is running`);
});
