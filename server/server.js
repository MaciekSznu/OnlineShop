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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue.',
      photo: 'glass_1_400.jpg',
      label: 'Nowość',
    },
    {
      id: '_0002',
      name: 'Product 2',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue. Quisque maximus rutrum varius. Maecenas volutpat est vulputate lectus posuere, non pellentesque ipsum consectetur. Vivamus urna est, elementum nec congue sed, fringilla vel sem. Nam pharetra massa ac ligula ullamcorper lobortis. Donec tristique eros cursus est tristique, et porta mi consequat. Aenean vel hendrerit orci.',
      photo: 'glass_2_400.jpg',
      label: 'Nowość',
    },
  ]
  res.json(data);
});

app.listen(8000, () => {
  console.log('Server is running on port:', 8000);
});