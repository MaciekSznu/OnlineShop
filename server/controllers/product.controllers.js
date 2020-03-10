
const Product = require('../models/product.model');

//get all products

exports.getProducts = async (req, res) => {

  //const data = products;
  try {
    res.status(200).json(await Product.find());
  } catch(err) {
    res.status(500).json(err);
  }
};