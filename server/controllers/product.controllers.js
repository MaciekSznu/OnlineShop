
const products = require('../testProducts');

//get all products

exports.getProducts = (req, res) => {
  const data = products;
  res.json(data);
};