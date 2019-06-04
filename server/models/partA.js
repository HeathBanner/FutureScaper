const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartASchema = new Schema({
    Accepted_Symbol: {
        type: String,
        trim: true,
    },
    Synonym_Symbol: {
        type: String,
        trim: true, 
    },
    Scientific_Name: {
        type: String,
        trim: true, 
    },
    Common_Name: {
        type: String,
        trim: true,
    },
    Image_Gallery: {
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
}, {collection: 'PartA'});

const PartA = mongoose.model('PartA', PartASchema);

module.exports = PartA;
