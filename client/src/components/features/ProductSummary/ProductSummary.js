import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProductSummary.scss';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class ProductSummary extends React.Component {

  componentDidMount() {
    const { loadProductsByPage, initialPage = 1, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage);
  }

  loadProductsPage = (page) => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  }

  render() {

    const { products, request, pages, presentPage } = this.props;
    const { loadProductsPage } = this;
    console.log(this.props);

    return (
      <div>
        { (request.pending === true || request.success == null) && <Spinner /> }
        { (request.pending === false && request.success === true) &&
          <Container>
            <Row className="d-flex justify-content-end align-items-end">
              {products.map(product =>
                <Col lg="6" className="m-2 productWrapper" key={product.id}>
                  <Link className="productLink" to={`/products/${product.id}`}>
                  <p className="productLabel">{product.label}</p>
                  <div className="productPhoto">
                    <img className="productSummaryImage" src={'http://localhost:3000/' + product.photo} alt={''} />
                  </div>
                  <div className="productInfoWrapper">
                    <p className="productInfoName">{product.name}</p>
                    <p className="productInfoPrice">{product.price} zł</p>
                  </div>
                  </Link>
                </Col>
              )}
            </Row>
            <Row>
              <Pagination pages={pages} onPageChange={(presentPage) => console.log(presentPage)} initialPage={presentPage} />
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
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired,
};

export default ProductSummary;