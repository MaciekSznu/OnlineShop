import React from 'react';

class ProductsList extends React.Component {
    state = {
    products: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res });
      });
  }

  render() {
    return (
      <div>
        <h4>Products List</h4>
      <div>
        {this.state.products.map(product =>
          <div className="productWrapper" key={product.id}>
            <div className="productPhoto">
              <img src={product.photo} alt={product.name} />
              <p>{product.label}</p>
            </div>
            <div className="productDescriptionWrapper">
              <p>{product.name}</p>
              <p>{product.price} zł</p>
              <p>{product.description}</p>
            </div>
          </div>
          )}
      </div>
      </div>
    );
  }
};

export default ProductsList;