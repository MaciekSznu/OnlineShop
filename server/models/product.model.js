const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  price: { type: 'Number', required: true },
  description: { type: 'String', required: true },
  photo: { type: 'String', required: true },
  label: { type: 'String', required: false },
});

module.exports = mongoose.model('Product', Product);