import axios from 'axios';

import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products;

// action name creator
const reducerName = 'PRODUCTS';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* THUNKS */
export const loadProductsRequest = () => {
  return async dispatch => {

    try {

      const res = await axios.get(`${API_URL}/products`);
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      dispatch(loadProducts(res.data));
    
    } catch(err) {
      console.log(err.message);
    }

  };
};


/* INITIAL STATE */
const initialState = [];

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [ ...action.payload ];
    default:
      return statePart;
  }
};