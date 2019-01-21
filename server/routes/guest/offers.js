const connection = require('../myUtils/dbConnect.js');

module.exports = function (req, res) {
	const data = {};

	return connection.query('SELECT * FROM cars', function (err, rows) {
		if (err) {
			console.error(err);
			data.message = "Podczas pobierania aut wystapil blad";
			return res.json(data);
		}
		data.offers = rows;
		return res.json(data);
		//res.send({ express: "Hello From Express" });
		//res.
	});
};