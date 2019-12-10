const mongoose = require('mongoose');

const { Schema } = mongoose;

const RecipeSchema = new Schema({
  Restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Unit',
  },
  Name: {
    type: String,
    required: true,
  },
  CO2: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
