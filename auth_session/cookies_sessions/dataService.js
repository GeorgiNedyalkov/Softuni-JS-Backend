// a model to read, write files to db
const jwt = require("jsonwebtoken");
const fs = require("fs/promises");
const db = require("./db.json");
const bcrypt = require("bcrypt");
const { CLIENT_RENEG_LIMIT } = require("tls");

const secret = "Sliderin";

async function saveDb() {
  const data = JSON.stringify(db, null);
  await fs.writeFile("./db.json", data);
}

exports.registerUser = async (username, password) => {
  // check if there is such a user
  if (db.users.some((user) => user.username === username)) {
    throw `User already exists`;
  }
  // if there is no user
  // - hash the password
  // -- generate salt
  const salt = await bcrypt.genSalt(10);
  // -- generate hash
  const hash = await bcrypt.hash(password, salt);

  db.users.push({
    username,
    password: hash,
  });

  // save database
  await saveDb();
};

exports.loginUser = async (username, password) => {
  const user = db.users.find((u) => u.username === username);

  if (!user) {
    throw `No such username or password!`;
  }

  const isAuthenticated = await bcrypt.compare(password, user.password);

  if (!isAuthenticated) {
    throw `No such username or password!`;
  }

  const payload = { username: user.username };
  const options = { epxiresIn: "1h" };
  const token = jwt.sign(payload, secret, options);
  console.log(token);

  return token;
};
