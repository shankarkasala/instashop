import { GET_SELECTED_PRODUCT } from "./ProductTypes";

export const getSelectedProduct = (data) => (dispatch) => {
  dispatch({ type: GET_SELECTED_PRODUCT, payload: data });
};
