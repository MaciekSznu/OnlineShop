import { connect } from 'react-redux';
import { getRequest, getSingleProduct, loadSingleProductRequest } from '../../../redux/productsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  products: getSingleProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadSingleProduct: (id) => dispatch(loadSingleProductRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);