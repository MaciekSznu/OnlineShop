import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ProductSummary.scss';

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
        <Container>
          <Row>
          {this.state.products.map(product =>
            <Col lg="6" className="productWrapper" key={product.id}>
              <div className="productPhoto">
                <img src={'client/src/assets/ProductsImages/' + product.photo} alt={''} />
                <p className="productLabel">{product.label}</p>
                <div className="productInfoWrapper">
                  <p className="productInfoName">{product.name}</p>
                  <p className="productInfoPrice">{product.price} zł</p>
                </div>
              </div>
            </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
};

export default ProductsList;