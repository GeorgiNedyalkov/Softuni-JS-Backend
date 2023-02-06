# Using Cookies

## HTTP Communication

HTTP is _stateless_. In order to perserve state, _cookies_ are stored on the _Client_.

_Session Cookie_ - exists on the _Server_

- It can _store information_ about a Client
- Used to _persist state_ across requests
- Matched to a Client by their _cookie_

## Session vs Cookie

- _Sessions_ are preferred when we need to store _short-term_ information/values.
- _Cookies_ are preferred when we need to store _long-term_ information/values.
- _Sessions_ are safer because they are sotred on the server.
- _Cookies_ are not very safe. Expiration _can be set_, even for years.

## Project Demo

- Set up a basic express app with nodemon and morgan
- Spin up server

routes:

- on route /login get a form to sumbit
- on route /login post the submitted username and password
  - use urlencoded({extended: false}) middleware to parse body
  - write a simple auth checking for username and password
- on route /profile:
  - check if user is logged
  - if not 401: unauthorized
  - if yes do somehting else

```javascript
const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
```

Cookies:

- install cookie-parser

A cookie parser middleware with `secret` and `options`.
We can get and set cookies.

```javascript
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "Ivan" && password == "peti") {
    const authData = {
      username: Ivan,
    };
    res.cookie("auth", JSON.stringify(authData));
    res.redirect("/");
  }

  // fail
  res.status(401).end(); // status 401 unauthorized
});
```

## Session

How to make a session?

- install express-session
- set up the the session
- set the session with req to set and get info

## Authentication Security
