const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  db.Users.findOne({ email })
    .then(user => {
      console.log(!user || !user.comparePassword(password))
      if (!user || !user.comparePassword(password)) {
        console.log('wtf')
        return res.status(401).send("Unauthorized");
      }

      res.json({
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
        user
      });
    });
});

usersController.post('/register', (req, res) => {
  const { email, password } = req.body;

  db.Users.create({ email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});


// db.Users.create({email: 'heathbanner@outlook.com', password: 'mixedpass'})
// .then(user => console.log(user))
// .catch(err => console.log(err));

module.exports = usersController;
