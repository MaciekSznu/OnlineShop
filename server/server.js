const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/products', (req, res) => {
  const data = [
    {
      id: '_0001',
      name: 'Product 1',
      price: 69.99,
      description: 'Product 1 description',
      photo: '/assets/glass_1_400.jpg',
      label: 'Nowość',
    },
    {
      id: '_0002',
      name: 'Product 2',
      price: 69.99,
      description: 'Product 2 description',
      photo: '/assets/glass_2_400.jpg',
      label: 'Nowość',
    },
  ]
  res.json(data);
});

app.listen(8000, () => {
  console.log('Server is running on port:', 8000);
});