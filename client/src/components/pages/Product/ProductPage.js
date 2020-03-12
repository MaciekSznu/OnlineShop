import React from 'react';
import SingleProduct from '../../features/SingleProduct/SingleProductContainer';

const ProductPage = ({match}) => (
  <div>
    <SingleProduct id={match.params.id}/>
  </div>
);

export default ProductPage;