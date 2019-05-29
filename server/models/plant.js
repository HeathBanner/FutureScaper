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
    },
}, {collection: 'Plant'});

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;