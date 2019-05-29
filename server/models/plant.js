
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
