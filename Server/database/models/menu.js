const mongoose = require('mongoose');

const { Schema } = mongoose;

const MenuSchema = new Schema({
  Restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Unit',
  },
  Name: {
    type: String,
    required: true,
  },
  Groups: [
    {
      name: {
        type: String,
        required: true,
      },
      recipes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Recipe',
        },
      ],
    },
  ],
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
