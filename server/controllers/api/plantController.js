const plantController = require('express').Router();
const axios = require('axios');
<<<<<<< HEAD
const Plant = require('../../models/plant');
const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/futureScaper";
mongoose.connect(MONGODB_URI);

=======
// var mongoose = require("mongoose");

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// mongoose.Promise = Promise;
// Connect to the Mongo DB (heroku-compatible)
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/future_scaper";
// mongoose.connect(MONGODB_URI);

const db = require('../../models/plant');
>>>>>>> f4ec3da182d7484786105526c90048e8389aa3c3

plantController.get('/getPlants', (req, res) => {

    axios.defaults.headers.common['Authorization'] = 'ZCtTandOTGNEOVNxZEQ5a1Q2dHA4QT09'

<<<<<<< HEAD
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
=======
    axios.get('https://trefle.io//api/species/189016').then(function (response) {
                let rd = response.data;
                // console.log(rd);

                let query = {
                    slug: { $eq: rd.slug }
                },
                update = { expire: new Date() },
                options = { upsert: true, new: true, setDefaultsOnInsert: true };

                // Find the document
                db.Plant.findOneAndUpdate(query, update, options, function (error, result) {
                if (error) {
                    newEntry = {};
                    newEntry.name = rd.name;
                    newEntry.lifespan = rd.lifespan;

                    db.Plant.create(newEntry)
                    .then(function (dbPlant) {
                    // View the added result in the console
                    console.log(dbPlant);
                    })
                    .catch(function (err) {
                    // If an error occurred, log it 
                    console.log(err);
                    });
                }

                console.log(result);
            });
        });

    //     db.Plant.create(req.body)
    //         .then(function (dbPlant) {
    //             // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
    //             // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
    //             // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
    //             return db.Plant.findOneAndUpdate({ _id: req.params.id }, { name: dbPlant.slug }, { new: true });
    //         })
    //         .then(function (dbPlant) {
    //             // If we were able to successfully update an Article, send it back to the client
    //             res.json(dbPlant);
    //         })
    //         .catch(function (err) {
    //             // If an error occurred, send it to the client
    //             res.json(err);
    //         });
    // });
>>>>>>> f4ec3da182d7484786105526c90048e8389aa3c3
});

    module.exports = plantController;