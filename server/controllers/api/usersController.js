const usersController = require('express').Router();

const db = require('../../models');

const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.get('/me', JWTVerifier, (req, res) => {
  
  let user = req.user;
  res.json(user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.Users.findOne({ email })
    .then(user => {

      if (!user || !user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }

      res.json({
        user,
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET)
      });

    });
});

usersController.post('/register', (req, res) => {
  
  const { email, password } = req.body;

  db.Users.findOne({email})
    .then(user => {

      if(!user){db.Users.create({ email, password })
        .then(user => res.json(user))
        .catch(err => res.json(err));
      }

      if(user.email === email){res.json('Email already exists!')}

    });
});

module.exports = usersController;
