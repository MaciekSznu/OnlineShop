import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Spinner from '../../common/Spinner/Spinner';
import SortBox from '../../features/SortBox/SortBox';
import ProductSummary from '../../features/ProductSummary/ProductSummaryContainer';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounter';
import SingleProduct from '../../features/SingleProduct/SingleProduct';


const HomePage = () => (
  <Container>
    <Row>
      <Col lg="4">
        <SortBox />
      </Col>
      <Col lg="8">
        <Spinner />
        <ProductSummary />
        <ProductsCounter />
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <SingleProduct />
      </Col>
    </Row>
  </Container>
);

export default HomePage;