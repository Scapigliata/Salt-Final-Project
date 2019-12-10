require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');

const GM_KEY = process.env.GOOGLE_MAPS_API_KEY;

const {
  models: { Menu, Recipe, Restaurant },
} = require('./database/models');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const generateScrambleValue = () => Math.random() + 0.5;

const scrableCO2Values = async () => {
  try {
    const recipes = await Recipe.find();

    await Promise.all(
      recipes.map(async recipe => {
        const co2Value = Math.floor(recipe.CO2 * generateScrambleValue());
        await Recipe.updateOne({ _id: recipe._id }, { $set: { CO2: co2Value } });
        return null;
      }),
    );
    console.log('Scrable done');
    return null;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

const generateMockTime = () => {
  const time = Math.floor(Math.random() * 1440);
  return time;
};

const addMockOpenHours = async () => {
  try {
    const restaurants = await Restaurant.find();

    await Promise.all(
      restaurants.map(async restaurant => {
        const Openhours = {
          1: { start: generateMockTime(), end: generateMockTime() },
          2: { start: generateMockTime(), end: generateMockTime() },
          3: { start: generateMockTime(), end: generateMockTime() },
          4: { start: generateMockTime(), end: generateMockTime() },
          5: { start: generateMockTime(), end: generateMockTime() },
          6: { start: generateMockTime(), end: generateMockTime() },
          7: { start: generateMockTime(), end: generateMockTime() },
        };
        await Restaurant.updateOne({ _id: restaurant._id }, { $set: { Openhours } });
        return null;
      }),
    );
    return null;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

const coordinatesUrl = address => {
  const parsedadress = address
    .replace(/(\s)/gi, '+')
    .replace(/([åÅ])/gi, '%C3%A5')
    .replace(/([äÄ])/gi, '%C3%A4')
    .replace(/([öÖ])/gi, '%C3%B6');
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${parsedadress}&key=${GM_KEY}`;
};

const addCoordinates = async () => {
  try {
    const restaurants = await Restaurant.find();

    await Promise.all(
      restaurants.map(async restaurant => {
        const { data } = await axios(coordinatesUrl(restaurant.Address));

        const Coordinates = {
          Latitude: data.results[0].geometry.location.lat,
          Longitude: data.results[0].geometry.location.lng,
        };
        await Restaurant.updateOne({ Name: restaurant.Name }, { $set: { Coordinates } });
        return null;
      }),
    );
    return null;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/coordinates', (req, res) => {
  addCoordinates();
  res.send('Done');
});

app.get('/openhours', (req, res) => {
  addMockOpenHours();
  res.send('Done');
});

app.get('/scrableco2', (req, res) => {
  scrableCO2Values();
  res.send('Done');
});

app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().lean();
    const day = new Date().getDay() + 1;
    const result = restaurants.map(restaurant => ({
      ...restaurant,
      Openhours: restaurant.Openhours[day],
    }));
    res.send(result);
  } catch (err) {
    console.error(err.message);
    res.send({ msg: `ERROR: ${err.message}` });
  }
});

app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (err) {
    console.error(err.message);
    res.send({ msg: `ERROR: ${err.message}` });
  }
});

app.get('/menus', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.send(menus);
  } catch (err) {
    console.error(err.message);
    res.send({ msg: `ERROR: ${err.message}` });
  }
});

module.exports = app;
