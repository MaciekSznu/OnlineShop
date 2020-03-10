import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import './ProductSummary.scss';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';



class ProductSummary extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {

    const { products, request } = this.props;
    return (
      <div>
        { (request.pending === true || request.success == null) && <Spinner /> }
        { (request.pending === false && request.success === true) &&
          <Container>
            <Row>
            {products.map(product =>
              <Col lg="6" className="p-2 productWrapper" key={product.id}>
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
        }
        { (request.pending === false && request.error !== null) && <Alert variant="error"> {request.error} </Alert> }
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