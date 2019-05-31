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
}, {collection: 'Plants'});

const onePlant = mongoose.model('onePlant', PlantSchema);

module.exports = onePlant;
