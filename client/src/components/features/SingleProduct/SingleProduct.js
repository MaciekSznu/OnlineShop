import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './SingleProduct.scss';

class SingleProduct extends React.Component {
    state = {
    products: [
      {
        id: '_0001',
        name: 'Product 1',
        price: 69.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae venenatis sapien. Sed ante mi, fermentum et eros eget, sollicitudin fringilla justo. Quisque fermentum mauris vitae varius consequat. Sed finibus at nisl et sagittis. Pellentesque ex augue, sollicitudin at leo sit amet, maximus commodo augue. Quisque maximus rutrum varius. Maecenas volutpat est vulputate lectus posuere, non pellentesque ipsum consectetur. Vivamus urna est, elementum nec congue sed, fringilla vel sem. Nam pharetra massa ac ligula ullamcorper lobortis. Donec tristique eros cursus est tristique, et porta mi consequat. Aenean vel hendrerit orci.',
        photo: 'glass_1_400.jpg',
        label: 'Nowość',
      },
      {
        id: '_0002',
        name: 'Product 2',
        price: 69.99,
        description: 'Product 2 description',
        photo: 'glass_2_400.jpg',
        label: 'Nowość',
      },
    ],
  }

  // componentDidMount() {
  //   fetch('http://localhost:8000/api/products')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ products: res });
  //     });
  // }

  render() {

    console.log(this.state.products[0]);

    const product  = this.state.products[0];

    return (
      <div className="singleProductWrapper" key={product.id}>
        <Container>
          <Row>
            <Col lg="4" className="singleProductPhoto">
              <img src={'client/src/assets/ProductsImages/' + product.photo} alt={''} />
            </Col>
            <Col lg="8">
              <div className="singleProductDescriptionWrapper">
                <p className="singleProductInfoName">{product.name}</p>
                <p className="singleProductInfoPrice">{product.price} zł</p>
                <p className="singleProductInfoDescription">{product.description}</p>
              </div>
              <Button className="singleProductAddToBasket" color="secondary">Dodaj do koszyka</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default SingleProduct;