const plantsController = require('express').Router();
const db = require("../../models/plant");
const mongoose = require('mongoose');

var MONGODB_URI = "mongodb://localhost/futureScaper"
// var MONGODB_URI = "mongodb://HeathBanner:Mixedpass1@ds133187.mlab.com:33187/heroku_3k4wk5ql";
mongoose.connect(MONGODB_URI);

// Global error catch for Mongoose
db.events.on('error', err => console.log(err.message));

// Define methods for the plantsController
const PLANTS = {
  findAll: function(page, res) {
    db
      .find({}, null, {skip: page, limit: 5})
      .sort({ date: -1 })
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    var regex = new RegExp(req.body.data, "i");
    db
      .find({'Common_Name': regex}, null, {limit: 5})
      .sort({date: -1})
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findNewByName: function(req, res) {
    const regex = new RegExp(req.body.search, "i");
    const page = req.body.page
    console.log(page)
    console.log(regex)
    db
      .find({'Common_Name': regex}, null, {skip: page, limit: 5})
      .sort({date: -1})
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));

  },
  create: function(req, res) {
    db.Plant
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Plant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Plant
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}

plantsController.get('/getPlants', (req, res) => {
  console.log('Getting plants...');
  PLANTS.findAll(0, res);
});

plantsController.post('/getNew', (req, res) => {
  currentIndex = req.body.data;
  console.log('Getting next set of plants...');
  console.log(`                       HeathHeat                                         
                                  hHeathHeathHeathH                                     
                              eathHeathHeathHeathHeath                                  
                      HeathHeathHeath           HeathHea                                
                   thHeathHeathH                  eathHea                               
                 thHeathHeathHea                   thHeat                               
                 hHeathHeathHeath                   Heath                               
                 HeathHeathH eathHe    athHeathHea  thHea                               
                 thHeathHeathHeathHe athHeathHeathHe athH                               
                 eathHeathHeathHea  thHeathHeathHeathHeat                               
                hHeat  hHeathHeath  HeathHeathHeathHeathH                               
               eathHeathHeathHeathH eathHeathHe athHeathH                               
              eathHeathHeathHeath   HeathHeathHeathHeathH                               
             eathHeathHeathHeathHeathHeathHeathHe  athHe                                
            athHe          athHeathHeathHeath     HeathH                                
           eathH                      eathHea     thHeat                                
          hHeath                                 HeathH                                 
         eathHe                                 athHea                                  
        thHeat                                  hHeath                                  
        Heath                      Heat        hHeath                                   
        Heat                      hHeat hHe   athHea                                    
        thHe                      athHeathHe  athHe                         athHeathH   
       eathH                      eathHeath  Heath                        HeathHeathHe  
       athHe                     athHeathHe athHe                       athHea    thHe  
       athHe                     athHeathH  eathH                     eathHea    thHea  
       thHea                    thHeathHe  athHea                   thHeath     Heath   
       Heath                    HeathHea   thHeathHeathHeathHea   thHeath     Heath     
        Heat                   hHeathHe    athHeathHeathHeathHeathHeath      Heath      
        Heat                   hHeathH     eathH   eathH   eathHeathH      eathHe       
        athH                  eathHeat      hHe   athHeathHeathHeat      hHeath         
        Heath               Heath Heath         HeathHeathHeathHea     thHeath          
         Heat             hHeat  hHeathH         eathHeathHeathHeath   HeathHea         
         thHea            thHeathHeathHe                     athHeath    HeathHeat      
          hHeat            hHeathHeathH              eath       HeathH  eath Heath      
          HeathH              eath                   Heat        hHeath  HeathHea       
           thHeat                                hHe              athHe    athH         
            eathHeat                            hHea              thHea     thHe        
               athHeat                          hHea              thHeathHeathHe        
     ath        HeathHeath                       Heat           hHeathHeathHeat         
    hHeathH    eathHeathHeathHea                  thH         eathHea    t              
    hHeathHeathHea thHeathHeathHeathHeat           hHea    thHeath                      
    Heat hHeathHeathHea    thHeathHeathHea thHeathHeathHeathHeat                        
     hHea  thHeathHea         thHeathHeat hHeathHeathHeathHea                           
      thHe   athHea         thHeathHeath Heath HeathHeathH                              
       eathHeathH           eathHeathHe  athH                                           
        eathHea              thHeathH   eath                                            
          Hea                thHeat    hHea                                             
                              thHeat  hHea                                              
                               thHeathHea                                               
                                 thHeath                                                
                                   Hea  `)
  console.log('Current index:', currentIndex);
  PLANTS.findAll(currentIndex, res);
});

plantsController.post('/getNewByName', (req, res) => {
  console.log(req.body)
  PLANTS.findNewByName(req, res);
})

plantsController.post('/plotSearch', (req, res) => {PLANTS.findByName(req, res)});

plantsController.post('/plantSearch', (req, res) => {PLANTS.findByName(req, res)});


module.exports = plantsController;