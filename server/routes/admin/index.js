const admin = require("express").Router();
const manageCar = require("./manageCar");
const addCar = require("./addCar");

admin.post("/addCar", addCar);

admin.route('/manageCar/:carId')
    .put(manageCar.put)
    .delete(manageCar.delete)

module.exports = admin;
