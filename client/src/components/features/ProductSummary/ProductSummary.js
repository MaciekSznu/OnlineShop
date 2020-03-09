import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import './ProductSummary.scss';

class ProductSummary extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {

    const { products } = this.props;
    return (
      <div>
        <h4>Products List</h4>
        <Container>
          <Row>
          {products.map(product =>
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

ProductSummary.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default ProductSummary;