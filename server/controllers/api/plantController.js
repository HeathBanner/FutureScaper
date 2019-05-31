const plantController = require('express').Router();
const axios = require('axios');
const Plant = require('../../models/plant');
const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/futureScaper";
mongoose.connect(MONGODB_URI);

//Global Mongoose error catch (for "Plant" model):
Plant.events.on('error', err => console.log(err.message));

plantController.get('/getPlants', (req, res) => {

    axios.defaults.headers.common['Authorization'] = 'ZCtTandOTGNEOVNxZEQ5a1Q2dHA4QT09';

    // Default search query:
    // 'https://trefle.io//api/plants?complete_data=true'

    let searchQuery = 'https://trefle.io//api/plants?complete_data=true&page_size=30';

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
                // console.log(result);
            });
        }
        res.json(rd);
    }).catch(err => console.log(err));
});

// plantController.get('/getPlantDetails:id', (req, res) => {
//     // Single plant search:
//     // https://trefle.io//api/plants/117788

//     console.log("get plant details!");

//     let whichPlant = req.params.id;
//     const updatePlants = async () => {
//         const getPlants = await Plant.find({ checked: false });
//         // console.log(getPlants);

//         //get links
//         let queryArray = [];
//         for (plant in getPlants) {
//             // console.log(getPlants[plant])
//             let curPlant = getPlants[plant];
//             let ssLink = curPlant.link;
//             let ssLen = ssLink.length;
//             let ssEnd = ssLink.substring(ssLen - 6, ssLen);
//             // console.log(`ssLink: ${ssLink}
//             //                 ssLen: ${ssLen}
//             //                 ssEnd: ${ssEnd}`);

//             let searchQuery = 'https://trefle.io//api/plants/' + ssEnd;
//             queryArray.push(searchQuery);
//         }
//         // console.log(queryArray);

//         for (query in queryArray) {
//             axios.defaults.headers.common['Authorization'] = 'ZCtTandOTGNEOVNxZEQ5a1Q2dHA4QT09';
//             let searchQuery = queryArray[query];
//             axios.get(searchQuery).then(function (response) {
//                 let rd = response.data;
//                 console.log(rd);
//                 for (plant in rd) {
//                     console.log("family common name:", rd[plant].family_common_name);
//                     console.log("plant:", rd[plant], '\n', "slug:", rd[plant].slug);
//                     console.log(rd[plant].main_species.specifications.lifespan);
//                     Plant.updateOne({ slug: rd[plant].slug }, {
//                         slug: rd[plant].slug || 'No Name Found',
//                         link: rd[plant].link || 'No Link Provided',
//                         commonName: rd[plant].common_name || 'No Common Name',
//                         scientificName: rd[plant].scientific_name || 'No Scientific Name',
//                         lifespan: rd[plant].main_species.specifications.lifespan || 'No Lifespan',
//                         checked: true
//                     }, { upsert: false }).then(function (result) {
//                         // console.log(result);
//                     });
//                 }
//                 res.json(rd);
//             })
//         }
//     };

//     updatePlants();

// });
module.exports = plantController;