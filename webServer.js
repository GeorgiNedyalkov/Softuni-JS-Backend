const http = require("http");

// create server
const server = http.createServer((req, res) => {
  //   routing
  switch (req.url) {
    case "/":
      res.write("Hello from Home");
      break;
    case "/cats":
      res.write("Kitties gang");
      break;
    default:
      res.write("Anything else");
  }
  res.end();
});

server.listen(5000);

console.log("Server is running on port 5000...");
