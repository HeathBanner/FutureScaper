const plantController = require('express').Router();
const axios = require('axios');

plantController.get('/getPlants', (req, res) => {

    axios.defaults.headers.common['Authorization'] = 'ZCtTandOTGNEOVNxZEQ5a1Q2dHA4QT09'

    axios.get('https://trefle.io//api/species/189016').then(function(response) {
        console.log(response);
        res.json(response);
    });
});

module.exports = plantController;