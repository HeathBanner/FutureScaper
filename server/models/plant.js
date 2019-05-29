<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    slug: {
        type: String,
        trim: true,
    },
    scientificName: {
        type: String,
        trim: true,
    },
    link: {
        type: String,
        trim: true,
        required: "Image is required!"
    },
}, {collection: 'Plant'});

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
=======

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lifespan: {
    type: String,
    required: true
  },
  bloom_period: {
    type: String,
    required: false
  },
});

let Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;
>>>>>>> f4ec3da182d7484786105526c90048e8389aa3c3
