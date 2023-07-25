import { GET_PRODUCT_DETAILS } from "./ProductsTypes";

export const getProduct = (data) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS, payload: data });
};
