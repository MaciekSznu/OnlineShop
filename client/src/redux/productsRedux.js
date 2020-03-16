import axios from 'axios';

import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getSingleProduct = ({ products}) => products.singleProduct;
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);
export const getActialPage = ({ products }) => products.presentPage;


export const getRequest = ({ products }) => products.request;

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

// action name creator
const reducerName = 'PRODUCTS';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');

export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');


export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });


/* THUNKS */
export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      const res = await axios.get(`${API_URL}/products`);
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    
    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadSingleProductRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      const res = await axios.get(`${API_URL}/products/${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  }
}

export const loadProductsByPageRequest = (page, productsPerPage = 4) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      const res = await axios.get(`${API_URL}/products/range/${startAt}/${limit}`);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page,
      };

      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());
    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

/* INITIAL STATE */
const initialState = {
  data: [],
  singleProduct: null,
  amount: 0,
  productsPerPage: 4,
  presentPage: 1,
  request: {
    pending: false,
    error: null,
    success: null,
    },
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.products],
      };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null }};
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true }};
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false }};
    default:
      return statePart;
  }
};