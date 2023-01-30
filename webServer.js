const http = require("http");

// create server
const server = http.createServer((req, res) => {
  // we can specify the content type
  res.writeHead(200, {
    "content-type": "text/plain",
  });

  //   routing
  switch (req.url) {
    case "/":
      res.write("<h1>Hello from Home<h1>");
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
