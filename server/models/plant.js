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
    Scientific_Name: {
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

    Bloom_Period: {
        type: String,
        trim: true,
    },
    Flower_Color: {
        type: String,
        trim: true,
    },
    Fruit_Seed_Period_Begin: {
        type: String,
        trim: true,
    },
    Active_Growth_Period: {
        type: String,
        trim: true,
    },
    Leaf_Retention: {
        type: String,
        trim: true,  
    },
    Common_Name: {
        type: String,
        trim: true,
    },
    Fact_Sheets: {
        type: String,
        trim: true,
    },

    Plant_Guides: {
        type: String,
        trim: true,
    },
    Characteristics_Data: {
        type: String,
        trim: true,
    },
    Accepted_Symbol: {
        type: String,
        trim: true,
    },
    Image: {
        type: Array,
        trim: true
    },
    Commercial_Availability: {
        type:String,
        trim:true,
    }
}, {collection: 'cleaner'});

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
