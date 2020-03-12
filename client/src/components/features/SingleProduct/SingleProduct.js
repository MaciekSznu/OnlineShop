import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './SingleProduct.scss';
import { BASE_URL } from '../../../config';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SingleProduct extends React.Component {

  componentDidMount() {
    const{ loadSingleProduct, id } = this.props;
    loadSingleProduct(id);
  }

  render() {

    const { products, request } = this.props;
    console.log(products);

    return (
      <div>
      { (request.pending === true || request.success == null) && <Spinner /> }
      { (request.pending === false && request.success === true) &&
        <Container>
          <Row className="d-flex justify-content-between singleProductWrapper">
            <Col lg="4" className="singleProductPhotoWrapper">
              <img className="singleProductPhoto" src={`${BASE_URL}${products.photo}`} alt={products.name} />
            </Col>
            <Col lg="8" className="pl-4">
              <div className="singleProductDescriptionWrapper">
                <p className="singleProductInfoName">{products.name}</p>
                <p className="singleProductInfoPrice">{products.price} zł</p>
                <p className="singleProductInfoDescription">{products.description}</p>
              </div>
              <Button className="singleProductAddToBasket" color="secondary">Dodaj do koszyka</Button>
            </Col>
          </Row>
        </Container>
      }
      { (request.pending === false && request.error !== null) && <Alert variant="error"> {request.error} </Alert> }
      </div>
    );
  }
};

export default SingleProduct;