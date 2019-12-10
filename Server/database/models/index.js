require('dotenv').config();
const mongoose = require('mongoose');
const Menu = require('./menu');
const Recipe = require('./recipe');
const Restaurant = require('./restaurant');

const url = process.env.DB_URI2;

const options = {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  keepAlive: 1,
  connectTimeoutMS: 30000,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 3000,
  dbName: 'salt_db',
};

const connectDb = () =>
  mongoose.connect(url, options, err => {
    if (!err) return console.log('Mongoose has connected to the database.');
    return err;
  });

const models = { Menu, Recipe, Restaurant };

module.exports = {
  models,
  connectDb,
};
