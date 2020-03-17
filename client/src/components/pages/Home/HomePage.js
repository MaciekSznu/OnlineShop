import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SortPanel from '../../features/SortBox/SortBoxContainer';
import ProductSummary from '../../features/ProductSummary/ProductSummaryContainer';
//import ProductsCounter from '../../features/ProductsCounter/ProductsCounter';

const HomePage = () => (
  <Container>
    <Row>
      <Col lg="3">
        <SortPanel />
      </Col>
      <Col lg="9">
        <ProductSummary productsPerPage={4} />
      </Col>
    </Row>
  </Container>
);

export default HomePage;