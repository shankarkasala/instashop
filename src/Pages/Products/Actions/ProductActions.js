import { GET_PRODUCT_DETAILS } from "./ProductTypes";

export const getProduct = (data) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS, payload: data });
};
