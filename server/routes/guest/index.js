const guest = require("express").Router();
const offers = require("./offers");
const singleOffer = require("./singleOffer");

guest.get("/offers", offers);
guest.get("/offers/:offerId/details", singleOffer);

module.exports = guest;
