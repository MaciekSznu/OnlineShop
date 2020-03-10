const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

const productRoutes = require('./routes/product.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', productRoutes);

// app.get('/api/products', (req, res) => {
//   const data = products;
//   res.json(data);
// });

app.listen(8000, () => {
  console.log('Server is running on port:', config.PORT);
});