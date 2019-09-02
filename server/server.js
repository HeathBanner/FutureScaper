const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: path.resolve(__dirname, '.env')
  });
}

const express = require('express');
const logger = require('morgan');

const { passport } = require('./lib/passport');

const PORT = process.env.PORT || 3001;
const LOG_MODE = process.env.NODE_ENV === 'production' ? 'common' : 'dev';

const app = express();

app.use(logger(LOG_MODE));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
  app.use(express.static(clientBuildPath));
}

const MONGODB_URI = process.env.MONGODB_URI;

const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);

app.use(require('./controllers'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {});

module.exports = app;
