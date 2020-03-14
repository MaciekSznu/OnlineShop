import { connect } from 'react-redux';
import { getRequest, getProducts, loadProductsByPageRequest, getPages } from '../../../redux/productsRedux';
import ProductSummary from './ProductSummary';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  pages: getPages(state),
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page) => dispatch(loadProductsByPageRequest(page),)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary);