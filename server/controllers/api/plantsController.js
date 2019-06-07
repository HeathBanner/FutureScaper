const plantsController = require('express').Router();
const db = require("../../models/plant");
const partA = require('../../models/partA');
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');

var MONGODB_URI = "mongodb://localhost/futureScaper"
// var MONGODB_URI = "mongodb://HeathBanner:Mixedpass1@ds133187.mlab.com:33187/heroku_3k4wk5ql";
mongoose.connect(MONGODB_URI);

// Global error catch for Mongoose
db.events.on('error', err => console.log(err.message));

var goodyInterval = 0

// Define methods for the plantsController
const PLANTS = {
  findAll: function(page, res) {
    console.log('hit')
    db
      .find({}, null, {skip: page, limit: 5})
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel)
        // console.log(dbModel[0])
      })
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    console.log(req.body.data)
    var regex = new RegExp(req.body.data, "i");
    db
      .find({'Common_Name': regex}, null, {limit: 5})
      .sort({date: -1})
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
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

  scraper: function(req, res) {
    for (var i = 0; i < 3; i++) {
      db
      .find({}, null , {skip: i + goodyInterval, limit: 1})
      .then(result => {
        console.log(i)
        var symbol = result[0].Accepted_Symbol
        console.log(symbol)

        axios.get('https://plants.sc.egov.usda.gov/core/profile?symbol=' + symbol).then(function(response) {
          var $ = cheerio.load(response.data);
          var img;
          var arr = [];
          $('body').find('img[alt="no standard photo"]').map((elem, index) => {
            console.log('ELEM' + elem)
            img = $(index).attr('src')
            .split('/');
            img = img[img.length-1]
            var length = img.length
            var newString = img.substring(0, length-7) + 'l' + img.substring(length-6);
            newString = `https://plants.sc.egov.usda.gov/gallery/large/${newString}`
            arr[elem] = newString
          });
        db.update({Scientific_Name: result[0].Scientific_Name}, {
          Image: arr,
        }, {new: true})
        .then(final => {
          console.log(final)
          console.log(arr)
          if (i === 3) {
            console.log('UPDATE')
            goodyInterval++
            
          }  
        })
      })
    })
    }
  },


  cleanUp: function() {
    var counter = 0;
    for (var i = 0; i < 2400; i++) {

      db
      .find({}, null , {skip: i, limit: 1})
      .then(dbModel => {
        if ((dbModel[0].Commercial_Availability != null)) {
          console.log('pass')
          // console.log(dbModel[0].Scientific_Name)
      } else {
        counter++
        console.log('DELETE')
        // console.log(dbModel[0].Scientific_Name)
        // console.log(test)
        // console.log(test.Scientific_Name)
        // console.log(test.Bloom_Period)
        // console.log(test.Flower_Color)
        // console.log(test.Fruit_Color)
      
        db.findOneAndDelete({Scientific_Name: dbModel[0].Scientific_Name})
          .then(result => {
            // console.log(result)
          })
      }
      });
    }
    console.log("done!")
    console.log(counter);
  },
  insertGoodies: function() {
    for (var i = 0; i <= 300; i++) {
    partA
    .find({}, null , {skip: i + goodyInterval, limit: 1})
    .then(result => {
      console.log(result[0].Scientific_Name)
      console.log(result[0].Common_Name)
      console.log(result[0].Fact_Sheets)
      console.log(result[0].Plant_Guides)
      console.log(result[0].Characteristics_Data)
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
          console.log(goodyInterval - 1)
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

plantsController.post('/plotSearch', (req, res) => {
  console.log('PLOTSEARCH');
  PLANTS.findByName(req, res);
});

plantsController.post('/plantSearch', (req, res) => {
  console.log('PLANTSEARCH')
  PLANTS.findByName(req, res)
})


// setInterval(PLANTS.scraper, 20000);
// PLANTS.scraper()

// setInterval(PLANTS.insertGoodies, 30000)

module.exports = plantsController;