import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Basket.scss';

class Basket extends React.Component {
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

  // SKRÓCONY OPIS
  render() {
    return (
      <div>
        <h4>Koszyk</h4>
        <div>
          <Container>
            {this.state.products.map(product =>
              <Row className="basketProductWrapper" key={product.id}>
                <Col lg="2" className="basketProductPhoto">
                  <img src={'client/src/assets/ProductsImages/' + product.photo} alt={''} />
                </Col>
                <Col lg="6">
                  <div className="d-flex flex-column justify-content-center basketProductDescriptionWrapper">
                    <p className="basketProductName">{product.name}</p>
                    <p className="basketProductDescription">{product.description}</p>
                  </div>
                </Col>
                <Col lg="2" className="d-flex flex-column justify-content-center">
                  <p className="basketProductPrice">{product.price} zł</p>
                </Col>
                <Col lg="2" className="d-flex flex-column justify-content-center">
                  <div className="d-flex justify-content-center">
                    <span>-</span>
                    <span>...</span>
                    <span>+</span>
                    <span>szt</span>
                  </div>
                  <Button className="removeFromBasket" color="warning">Usuń produkt</Button>
                </Col>
              </Row>
            )}
          </Container>
          <Container>
            <Row>
              <Col>
                <div>kod rabatowy</div>
                <div>Total:</div>
                <Button className="payForBasket" color="secondary">Usuń produkt</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
};

export default Basket;


