const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

const productRoutes = require('./routes/product.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', productRoutes);

mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.once('open', () => console.log(`Connected to the database`));
db.on('error', (err) => console.log(`Error ${err}`));

app.listen(config.PORT, () => {
  console.log('Server is running on port:', config.PORT);
});