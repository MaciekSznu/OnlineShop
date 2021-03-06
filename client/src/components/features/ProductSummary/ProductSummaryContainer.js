import { connect } from 'react-redux';
import { getRequest, getProductsSorted, loadProductsByPageRequest, getPages, getPresentPage } from '../../../redux/productsRedux';
import ProductSummary from './ProductSummary';

const mapStateToProps = state => ({
  products: getProductsSorted(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getPresentPage(state),
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage),)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary);