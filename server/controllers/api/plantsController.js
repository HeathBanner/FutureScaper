const plantsController = require('express').Router();
const db = require("../../models/plant");

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
  PLANTS.findNewByName(req, res);
});

plantsController.post('/plotSearch', (req, res) => {
  PLANTS.findByName(req, res);
});

plantsController.post('/plantSearch', (req, res) => {
  PLANTS.findByName(req, res);
});

module.exports = plantsController;