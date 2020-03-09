import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ProductsList.scss';

class ProductsList extends React.Component {

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
                <p class="productLabel">{product.label}</p>
              {/* </div>
              <div className="productDescriptionWrapper"> */}
                <div class="productInfoWrapper">
                  <p class="productInfoName">{product.name}</p>
                  <p class="productInfoPrice">{product.price} zł</p>
                  {/* <p>{product.description}</p> */}
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

ProductsList.propTypes = {
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

export default ProductsList;