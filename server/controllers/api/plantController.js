const plantController = require('express').Router();
const axios = require('axios');
const Plant = require('../../models/plant');
const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/futureScaper";
mongoose.connect(MONGODB_URI);


plantController.get('/getPlants', (req, res) => {

    axios.defaults.headers.common['Authorization'] = 'ZCtTandOTGNEOVNxZEQ5a1Q2dHA4QT09'

    axios.get('https://trefle.io//api/plants?complete_data=true').then(function (response) {
        for (plant in response.data) {
            console.log(response.data[plant].slug);
            Plant.updateOne({ slug: response.data[plant].slug }, {
                slug: response.data[plant].slug,
                scientificName: response.data[plant].scientific_name,
                link: response.data[plant].link
            }, { upsert: true }).then(function (result) {
                console.log(result);
            });
        }
            res.json(response.data);
        });
});

module.exports = plantController;