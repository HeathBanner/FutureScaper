const plantController = require('express').Router();
const axios = require('axios');
const Plant = require('../../models/plant');
const onePlant = require('../../models/onePlant');
const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/futureScaper";
mongoose.connect(MONGODB_URI);

//Global Mongoose error catch (for "Plant" model):
Plant.events.on('error', err => console.log(err.message));
onePlant.events.on('error', err => console.log(err.message));

plantController.get('/getPlants', (req, res) => {

    axios.defaults.headers.common['Authorization'] = 'b3VGbzVhd0M0QzcrMFQ5djFPcmhYQT09'

    // Default search query:
    // 'https://trefle.io//api/plants?complete_data=true'

    let searchQuery = 'https://trefle.io//api/plants?complete_data=true&page_size=50';

    axios.get(searchQuery).then(function (response) {
        // console.log(response);
        let rd = response.data;
        // console.log(rd);
        for (plant in rd) {
            // console.log(rd[plant]);
            // console.log(rd[plant].slug);
            Plant.updateOne({ slug: rd[plant].slug }, {
                slug: rd[plant].slug,
                link: rd[plant].link,
                commonName: rd[plant].common_name,
                scientificName: rd[plant].scientific_name,
                checked: false
            }, { upsert: true }).then(function (result) {
                console.log(result);
            });
        }
        res.json(rd);
    });
});

plantController.get('/getPlantDetails', (req, res) => {
    // Single plant search:
    // https://trefle.io//api/plants/117788
    console.log("get plant details!");

    const updatePlants = async () => {
        const getPlants = await Plant.updateMany({checked: false}, {checked: true});

        console.log("docs matched:", getPlants.n);            // Number of documents matched
        console.log("docs modified:", getPlants.nModified);   // Number of documents modified
        // console.log("got plants:", getPlants);   // 
    };

    updatePlants();

});
module.exports = plantController;