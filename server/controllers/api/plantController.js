const plantController = require('express').Router();
const axios = require('axios');
const Plant = require('../../models/plant');
const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/futureScaper";
mongoose.connect(MONGODB_URI);


plantController.get('/getPlants', (req, res) => {

    axios.defaults.headers.common['Authorization'] = 'ZCtTandOTGNEOVNxZEQ5a1Q2dHA4QT09'

    axios.get('https://trefle.io//api/plants?complete_data=true').then(function(response) {
        console.log(response.data[0].slug);
        Plant.updateOne({slug: response.data[0].slug}, {
            slug: response.data[0].slug,
            scientificName: response.data[0].scientific_name,
            link: response.data[0].link
        }, {upsert: true}).then(function(result) {
            console.log(result);
        })
        res.json(response.data);
    });
});

module.exports = plantController;