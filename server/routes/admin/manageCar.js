const connection = require('../myUtils/dbConnect.js');
const isInt = require("../myUtils/isInt.js");

module.exports = {
  put: function (req, res) {
    const carId = parseInt(req.params.carId);
    const car = {};
    car.name = req.body.name;
    car.model = req.body.model;
    car.capacity = req.body.capacity;
    car.manufactureYear = req.body.manufactureYear;
    car.segment = req.body.segment;

    return connection.query('UPDATE cars set name=?, model=?, capacity=?, manufactureYear=?, segment=? WHERE id=?', [car.name, car.model, car.capacity, car.manufactureYear, car.segment, carId], function (err, rows) {
      if (err) {
        console.error(err);
        return res.json("wystapil blad podczas edytowania danych");
      }
      return res.redirect('/offers');
    });
  },
  delete: function (req, res) {
    const carId = parseInt(req.params.carId);
    return connection.query('DELETE FROM cars WHERE id=?', [carId], function (err, rows) {
      if (err) {
        console.error(err);
        return res.json("wystapil nieoczekiwany blad podczas usuwania uzytkownika");
      }
      return res.redirect('/offers');
    });
  }
};