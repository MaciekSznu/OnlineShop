import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SortBox from '../../features/SortBox/SortBox';
import ProductSummary from '../../features/ProductSummary/ProductSummaryContainer';
//import ProductsCounter from '../../features/ProductsCounter/ProductsCounter';

const HomePage = () => (
  <Container>
    <Row>
      <Col lg="3">
        <SortBox />
      </Col>
      <Col lg="9">
        <ProductSummary productsPerPage={6}/>
      </Col>
    </Row>
  </Container>
);

export default HomePage;