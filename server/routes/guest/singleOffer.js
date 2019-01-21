const isInt = require("../myUtils/isInt.js");
const connection = require("../myUtils/dbConnect.js");

module.exports = function (req, res) {
  const offerId = parseInt(req.params.offerId);
  const data = {};

  if (!isInt(offerId)) {
    data.message = "Podane parametry są nieprawdiłowe!";
    return res.json(data);
  }

  return connection.query("SELECT * FROM cars WHERE id=?", [offerId], function (err, rows) {
    if (err) {
      console.error(err);
      data.message = "Wystąpił błąd podczas wyświetlania auta";
      return res.json(data);
    }
    data.offers = rows;
    return res.json(data);
  });
};
