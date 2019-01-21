const routes = require("express").Router();
const path = require("path");
const guest = require("./guest");
const admin = require("./admin");

routes.use("/", guest);
routes.use("/", admin);

routes.get("/", function(req, res) {
  res.status(200).json({ message: "Connected!" });
});
// lub + deklaracja path.
//routes.all('/*', function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Cache-Control', 'no-cache');
//  return res.sendFile(path.join(__dirname, '../front/public'));
//});

module.exports = routes;
