const usersController = require('express').Router();

const db = require('../../models');

const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.get('/me', JWTVerifier, (req, res) => {
  let user = req.user;
  res.status(200).json(user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.Users.findOne({ email })
    .then((user) => {
      if (!user || !user.comparePassword(password)) {
        return res.status(401).json({ error: true, message: "Password does not match!" });
      }
      res.json({
        user,
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
      });
    })
    .catch(() => {
      res.status(500).json({ error: true, message: 'Something went wrong :(' });
    });
});

usersController.post('/register', (req, res) => {
  const { email, password } = req.body;
  db.Users.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(401).json({ error: true, message: 'Email already exists!' });
      }
      db.Users.create({ email, password })
        .then((user) => {
          if (!user) {
            res.status(500).json({
              error: true,
              message: 'Something went wrong :(',
            });
          }
          res.status(201).json({ error: false });
        })
        .catch(() => {
          res.status(500).json({
            error: true,
            message: 'Something went wrong :(',
          });
        });
    });
});

module.exports = usersController;
