import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import './SortBox.scss';


const SortBox = ({ sortOptions }) => {

  const handleOnClick = (key, direction) => {
    sortOptions({key, direction})
  };

  return (
    <Col className="col-9 pb-3 border-bottom border-secondary">
      <Row className="pb-3"><h5>Sortuj:</h5></Row>
      <Row role="button" className="pb-3 sortButton sortButton" onClick={() => handleOnClick('name', 'asc')}><h6 className="sortButtonText">Nazwa A-Z</h6></Row>
      <Row role="button" className="pb-3 sortButton" onClick={() => handleOnClick('name', 'desc')}><h6 className="sortButtonText">Nazwa Z-A</h6></Row>
      <Row role="button" className="pb-3 sortButton" onClick={() => handleOnClick('price', 'asc')}><h6 className="sortButtonText">Cena rosnąco</h6></Row>
      <Row role="button" className="pb-3 sortButton" onClick={() => handleOnClick('price', 'desc')}><h6 className="sortButtonText">Cena malejąco</h6></Row>
    </Col>
  );
}

SortBox.propTypes = {
  sortOptions: PropTypes.func.isRequired
};

export default SortBox;