const Product = require('./models/product.model');

const loadTestData = async () => {

  const data = [
    {
      id: '_0001',
      name: 'Product 1',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue.',
      photo: 'assets/glass_01.png',
      label: 'Nowość',
    },
    {
      id: '_0002',
      name: 'Product 2',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue. Quisque maximus rutrum varius. Maecenas volutpat est vulputate lectus posuere, non pellentesque ipsum consectetur. Vivamus urna est, elementum nec congue sed, fringilla vel sem. Nam pharetra massa ac ligula ullamcorper lobortis. Donec tristique eros cursus est tristique, et porta mi consequat. Aenean vel hendrerit orci.',
      photo: 'assets/glass_02.png',
      label: 'Nowość',
    },
    {
      id: '_0003',
      name: 'Product 3',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue.',
      photo: 'assets/glass_03.png',
      label: 'Nowość',
    },
    {
      id: '_0004',
      name: 'Product 4',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue. Quisque maximus rutrum varius. Maecenas volutpat est vulputate lectus posuere, non pellentesque ipsum consectetur. Vivamus urna est, elementum nec congue sed, fringilla vel sem. Nam pharetra massa ac ligula ullamcorper lobortis. Donec tristique eros cursus est tristique, et porta mi consequat. Aenean vel hendrerit orci.',
      photo: 'assets/glass_04.png',
      label: 'Nowość',
    },
    {
      id: '_0005',
      name: 'Product 5',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue.',
      photo: 'assets/glass_05.png',
      label: 'Nowość',
    },
    {
      id: '_0006',
      name: 'Product 6',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue. Quisque maximus rutrum varius. Maecenas volutpat est vulputate lectus posuere, non pellentesque ipsum consectetur. Vivamus urna est, elementum nec congue sed, fringilla vel sem. Nam pharetra massa ac ligula ullamcorper lobortis. Donec tristique eros cursus est tristique, et porta mi consequat. Aenean vel hendrerit orci.',
      photo: 'assets/glass_06.png',
      label: 'Nowość',
    },
    {
      id: '_0007',
      name: 'Product 7',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue.',
      photo: 'assets/glass_07.png',
      label: 'Nowość',
    },
    {
      id: '_0008',
      name: 'Product 8',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue. Quisque maximus rutrum varius. Maecenas volutpat est vulputate lectus posuere, non pellentesque ipsum consectetur. Vivamus urna est, elementum nec congue sed, fringilla vel sem. Nam pharetra massa ac ligula ullamcorper lobortis. Donec tristique eros cursus est tristique, et porta mi consequat. Aenean vel hendrerit orci.',
      photo: 'assets/glass_08.png',
      label: 'Nowość',
    },
    {
      id: '_0009',
      name: 'Product 9',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue.',
      photo: 'assets/glass_09.png',
      label: 'Nowość',
    },
    {
      id: '_0010',
      name: 'Product 10',
      price: 69.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue. Quisque maximus rutrum varius. Maecenas volutpat est vulputate lectus posuere, non pellentesque ipsum consectetur. Vivamus urna est, elementum nec congue sed, fringilla vel sem. Nam pharetra massa ac ligula ullamcorper lobortis. Donec tristique eros cursus est tristique, et porta mi consequat. Aenean vel hendrerit orci.',
      photo: 'assets/glass_10.png',
      label: 'Nowość',
    },
  ];

  try {

    const counter = await Product.countDocuments();

    if(counter === 0) {
      console.log('No products, loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

}
module.exports = loadTestData;