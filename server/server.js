const express = require('express');
const cors = require('cors');
const products = require('./testProducts');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/products', (req, res) => {
  const data = products;
  res.json(data);
});

app.listen(8000, () => {
  console.log('Server is running on port:', 8000);
});