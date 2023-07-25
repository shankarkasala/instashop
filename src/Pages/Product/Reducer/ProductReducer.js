import { GET_SELECTED_PRODUCT } from "../Actions/ProductTypes";

const initialState = {
  selectedProduct: []
  };
export const selectedProduct = (state = initialState, action) => {
    switch (action.type) {
      case GET_SELECTED_PRODUCT:
        return {
          ...state,
          selectedProduct: action.payload,
        };
     
      default:
        return state;
    }
  };