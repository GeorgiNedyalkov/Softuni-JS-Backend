const config = {
  production: {
    PORT: 1234,
    databaseURI:
      "mongodb+srv://gnedyalkov94:tZyBU7EyRR8Dw*8AjEo@cluster0.dpskgsi.mongodb.net/cubicle?retryWrites=true&w=majority",
  },
  development: {
    PORT: 5000,
    databaseURI:
      "mongodb+srv://gnedyalkov94:tZyBU7EyRR8Dw*8AjEo@cluster0.dpskgsi.mongodb.net/cubicle?retryWrites=true&w=majority",
  },
};

module.exports = config[process.env.node_env || "development"];
