const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    slug: {
        type: String,
        trim: true,
        required: true
    },
    link: {
        type: String,
        trim: true, 
        required: true
    },
    commonName: {
        type: String,
        trim: true, 
        required: true
    },
    scientificName: {
        type: String,
        trim: true,
        required: true
    },
    lifespan: {
        type: String,
        trim: true,
        required: true
    },
    checked: {
        type: Boolean,
        default: false,
    },
}, {collection: 'USDA'});

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
