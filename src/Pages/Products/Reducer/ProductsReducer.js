import { GET_PRODUCT_DETAILS } from "../Actions/ProductsTypes";

const initialState = {
  product: []
  };
export const productDetails = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT_DETAILS:
        return {
          ...state,
          product: action.payload,
        };
     
      default:
        return state;
    }
  };