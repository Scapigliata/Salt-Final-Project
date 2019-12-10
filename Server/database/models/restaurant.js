const mongoose = require('mongoose');

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
  Menus: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Menu',
    },
  ],
  Address: {
    type: String,
    required: true,
  },
  ImageSrc: {
    type: String,
    required: false,
  },
  Coordinates: {
    Latitude: {
      type: String,
      default: 'hej',
    },
    Longitude: {
      type: String,
      default: null,
    },
  },
  Openhours: {
    1: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    2: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    3: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    4: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    5: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    6: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    7: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
  },
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
