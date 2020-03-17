import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductsSorted, sortOptions } from '../../../redux/productsRedux';
import SortBox from './SortBox';

const SortPanel = ({ sortOptions }) => {
  return <SortBox sortOptions={sortOptions} />
};

SortPanel.propTypes = {
  sortOptions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getProductsSorted(state),
});

const mapDispatchToProps = {
  sortOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);