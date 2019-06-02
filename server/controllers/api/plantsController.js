const plantController = require('express').Router();
const db = require("../../models/plant");
const mongoose = require('mongoose')

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/futureScaper";
mongoose.connect(MONGODB_URI);

//Global Mongoose error catch (for "Plant" model):
db.events.on('error', err => console.log(err.message));

// Define methods for the plantsController
plantController.get('/getPlants', (req, res) => {

});

module.exports = plantController;
