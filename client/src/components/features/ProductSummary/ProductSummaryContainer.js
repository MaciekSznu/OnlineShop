import { connect } from 'react-redux';
import { getRequest, getProducts, loadProductsRequest } from '../../../redux/productsRedux';
import ProductSummary from './ProductSummary';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest(),)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary);