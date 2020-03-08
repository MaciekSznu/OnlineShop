import React from 'react';
import SortBox from '../../features/SortBox/SortBox';
import ProductsList from '../../features/ProductsList/ProductsList';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounter';


const HomePage = () => (
  <div>
    <SortBox />
    <ProductsCounter />
    <ProductsList />
  </div>
);

export default HomePage;