import React from 'react';
import { Container, Row, Col } from 'reactstrap';


class SortBox extends React.Component {

  render() {
    return (
      <Col className="col-9 pb-3 border-bottom border-secondary">
        <Row className="pb-3"><h5>Sortuj:</h5></Row>
        <Row className="pb-3"><h6>Nazwa A-Z</h6></Row>
        <Row className="pb-3"><h6>Nazwa Z-A</h6></Row>
        <Row className="pb-3"><h6>Cena rosnąco</h6></Row>
        <Row className="pb-3"><h6>Cena malejąco</h6></Row>
      </Col>
    );
  }
};

export default SortBox;