const plantsController = require('express').Router();
const db = require("../../models/plant");
const mongoose = require('mongoose');

const partA = require('../../models/partA');

var goodyInterval = 300


var MONGODB_URI = "mongodb://localhost/futureScaper"
// var MONGODB_URI = "mongodb://HeathBanner:Mixedpass1@ds133187.mlab.com:33187/heroku_3k4wk5ql";
mongoose.connect(MONGODB_URI);

// Global error catch for Mongoose
db.events.on('error', err => console.log(err.message));

// Define methods for the plantsController
const PLANTS = {
  findAll: function(page, res) {
    db
      .find({}, null, {skip: page, limit: 5})
      .sort({ date: -1 })
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    var regex = new RegExp(req.body.data, "i");
    db
      .find({'Common_Name': regex}, null, {limit: 5})
      .sort({date: -1})
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findNewByName: function(req, res) {
    const regex = new RegExp(req.body.search, "i");
    const page = req.body.page
    console.log(page)
    console.log(regex)
    db
      .find({'Common_Name': regex}, null, {skip: page, limit: 5})
      .sort({date: -1})
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));

  },
  create: function(req, res) {
    db.Plant
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Plant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Plant
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  insertGoodies: function() {
    for (var i = 0; i <= 300; i++) {
    partA
    .find({}, null , {skip: i + goodyInterval, limit: 1})
    .then(result => {
      // console.log(result[0].Scientific_Name)
      // console.log(result[0].Common_Name)
      // console.log(result[0].Fact_Sheets)
      // console.log(result[0].Plant_Guides)
      // console.log(result[0].Characteristics_Data)
      var plant = result[0].Common_Name
      db.update({Scientific_Name: result[0].Scientific_Name}, {
        Common_Name: result[0].Common_Name,
        Fact_Sheets: result[0].Fact_Sheets,
        Plant_Guides: result[0].Plant_Guides,
        Characteristics_Data: result[0].Characteristics_Data
      }, {new: true})
      .then(final => {
        console.log(final)
        console.log(plant)
        console.log(goodyInterval)
      })
        
      })
        if (i === 300) {
          console.log('UPDATE')
          goodyInterval = parseInt(goodyInterval + 300)
        }
  }
},

}

plantsController.get('/getPlants', (req, res) => {
  console.log('Getting plants...');
  PLANTS.findAll(0, res);
});

plantsController.post('/getNew', (req, res) => {
  currentIndex = req.body.data;
  console.log('Getting next set of plants...');
  console.log('Current index:', currentIndex);
  PLANTS.findAll(currentIndex, res);
});

plantsController.post('/getNewByName', (req, res) => {
  console.log(req.body)
  PLANTS.findNewByName(req, res);
})

plantsController.post('/plotSearch', (req, res) => {PLANTS.findByName(req, res)});

plantsController.post('/plantSearch', (req, res) => {PLANTS.findByName(req, res)});


// setInterval(PLANTS.insertGoodies, 30000)


module.exports = plantsController;