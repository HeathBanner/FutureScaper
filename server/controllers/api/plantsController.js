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
  console.log(`                                                                                        
                                                                                        
                                      JonJonJon                                         
                                  JonJonJonJonJonJo                                     
                              nJonJonJonJonJonJonJonJo                                  
                      nJonJonJonJonJo           nJonJonJ                                
                   onJonJonJonJo                  nJonJon                               
                 JonJonJonJonJon                   JonJon                               
                 JonJonJonJonJonJ                   onJon                               
                 JonJonJonJo nJonJo    nJonJonJonJ  onJon                               
                 JonJonJonJonJonJonJ onJonJonJonJonJ onJo                               
                 nJonJonJonJonJonJ  onJonJonJonJonJonJonJ                               
                onJon  JonJonJonJo  nJonJonJonJonJonJonJo                               
               nJonJonJonJonJonJonJ onJonJonJon JonJonJon                               
              JonJonJonJonJonJonJ   onJonJonJonJonJonJonJ                               
             onJonJonJonJonJonJonJonJonJonJonJonJ  onJon                                
            JonJo          nJonJonJonJonJonJo     nJonJo                                
           nJonJ                      onJonJo     nJonJo                                
          nJonJo                                 nJonJo                                 
         nJonJo                                 nJonJo                                  
        nJonJo                                  nJonJo                                  
        nJonJ                      onJo        nJonJo                                   
        nJon                      JonJo nJo   nJonJo                                    
        nJon                      JonJonJonJ  onJon                         JonJonJon   
       JonJo                      nJonJonJo  nJonJ                        onJonJonJonJ  
       onJon                     JonJonJonJ onJon                       JonJon    JonJ  
       onJon                     JonJonJon  JonJo                     nJonJon    JonJo  
       nJonJ                    onJonJonJ  onJonJ                   onJonJo     nJonJ   
       onJon                    JonJonJo   nJonJonJonJonJonJonJ   onJonJo     nJonJ     
        onJo                   nJonJonJ    onJonJonJonJonJonJonJonJonJo      nJonJ      
        onJo                   nJonJon     JonJo   nJonJ   onJonJonJo      nJonJo       
        nJon                  JonJonJo      nJo   nJonJonJonJonJonJ      onJonJ         
        onJon               JonJo nJonJ         onJonJonJonJonJonJ     onJonJo          
         nJon             JonJo  nJonJon         JonJonJonJonJonJonJ   onJonJon         
         JonJo            nJonJonJonJonJ                     onJonJon    JonJonJon      
          JonJo            nJonJonJonJo              nJon       JonJon  JonJ onJon      
          JonJon              JonJ                   onJo        nJonJo  nJonJonJ       
           onJonJ                                onJ              onJon    JonJ         
            onJonJon                            JonJ              onJon     JonJ        
               onJonJo                          nJon              JonJonJonJonJo        
     nJo        nJonJonJon                       JonJ           onJonJonJonJonJ         
    onJonJo    nJonJonJonJonJonJ                  onJ         onJonJo    n              
    JonJonJonJonJo nJonJonJonJonJonJonJo           nJon    JonJonJ                      
    onJo nJonJonJonJonJ    onJonJonJonJonJ onJonJonJonJonJonJonJ                        
     onJo  nJonJonJon         JonJonJonJo nJonJonJonJonJonJon                           
      JonJ   onJonJ         onJonJonJonJ onJon JonJonJonJo                              
       nJonJonJon           JonJonJonJo  nJon                                           
        JonJonJ              onJonJon   JonJ                                            
          onJ                onJonJ    onJo                                             
                              nJonJo  nJon                                              
                               JonJonJonJ                                               
                                 onJonJo                                                
                                   nJo       `)
  console.log('Current index:', currentIndex);
  PLANTS.findAll(currentIndex, res);
});

plantsController.post('/plotSearch', (req, res) => {PLANTS.findByName(req, res)});

plantsController.post('/plantSearch', (req, res) => {PLANTS.findByName(req, res)});


module.exports = plantsController;