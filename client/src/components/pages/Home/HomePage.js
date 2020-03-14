import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SortBox from '../../features/SortBox/SortBox';
import ProductSummary from '../../features/ProductSummary/ProductSummaryContainer';
//import ProductsCounter from '../../features/ProductsCounter/ProductsCounter';
import Pagination from '../../common/Pagination/Pagination';

const HomePage = () => (
  <Container>
    <Row>
      <Col lg="3">
        <SortBox />
      </Col>
      <Col lg="9">
        <ProductSummary />
        <Pagination pages={5} onPageChange={(page) => {console.log(page) }}/>
      </Col>
    </Row>
  </Container>
);

export default HomePage;