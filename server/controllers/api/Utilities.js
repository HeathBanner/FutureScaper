
// const axios = require('axios');
// const cheerio = require('cheerio');


//   scraper: function(req, res) {
//     for (var i = 0; i < 3; i++) {
//       db
//       .find({}, null , {skip: i + goodyInterval, limit: 1})
//       .then(result => {
//         console.log(i)
//         var symbol = result[0].Accepted_Symbol
//         console.log(symbol)

//         axios.get('https://plants.sc.egov.usda.gov/core/profile?symbol=' + symbol).then(function(response) {
//           var $ = cheerio.load(response.data);
//           var img;
//           var arr = [];
//           $('body').find('img[alt="no standard photo"]').map((elem, index) => {
//             console.log('ELEM' + elem)
//             img = $(index).attr('src')
//             .split('/');
//             img = img[img.length-1]
//             var length = img.length
//             var newString = img.substring(0, length-7) + 'l' + img.substring(length-6);
//             newString = `https://plants.sc.egov.usda.gov/gallery/large/${newString}`
//             arr[elem] = newString
//           });
//         db.update({Scientific_Name: result[0].Scientific_Name}, {
//           Image: arr,
//         }, {new: true})
//         .then(final => {
//           console.log(final)
//           console.log(arr)
//           if (i === 3) {
//             console.log('UPDATE')
//             goodyInterval++
            
//           }  
//         })
//       })
//     })
//     }
//   },


//   cleanUp: function() {
//     var counter = 0;
//     for (var i = 0; i < 2400; i++) {

//       db
//       .find({}, null , {skip: i, limit: 1})
//       .then(dbModel => {
//         if ((dbModel[0].Commercial_Availability != null)) {
//           console.log('pass')
//           // console.log(dbModel[0].Scientific_Name)
//       } else {
//         counter++
//         console.log('DELETE')
//         // console.log(dbModel[0].Scientific_Name)
//         // console.log(test)
//         // console.log(test.Scientific_Name)
//         // console.log(test.Bloom_Period)
//         // console.log(test.Flower_Color)
//         // console.log(test.Fruit_Color)
      
//         db.findOneAndDelete({Scientific_Name: dbModel[0].Scientific_Name})
//           .then(result => {
//             // console.log(result)
//           })
//       }
//       });
//     }
//     console.log("done!")
//     console.log(counter);
//   },

//   setInterval(PLANTS.scraper, 20000);
// PLANTS.scraper()



