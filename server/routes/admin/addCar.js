const connection = require('../myUtils/dbConnect.js');

module.exports = function (req, res) {
    const car = {};
    car.name = req.body.name;
    car.model = req.body.model;
    car.capacity = req.body.capacity;
    car.manufactureYear = req.body.manufactureYear;
    car.segment = req.body.segment;
    const data = {};

    return connection.query('INSERT INTO cars (`id`, `name`, `model`, `capacity`, `manufactureYear`, `segment`) VALUES (?, ?, ?, ?, ?, ?)', [null, car.name, car.model, car.capacity, car.manufactureYear, car.segment], function (err, rows) {
        if (err) {
            console.error(err);
            data.message = "wystapil blad przy dodawaniu uzytkownika";
            return res.json(data);
        }
        data.message = "auto zostalo dodane poprawnie";
        return res.json(data);
    });
};