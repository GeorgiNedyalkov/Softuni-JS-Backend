exports.getHomePage = (req, res) => {
  res.render("index");
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getErrorPage = (req, res) => {
  res.render("404");
};
