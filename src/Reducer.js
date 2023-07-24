import { combineReducers } from "redux";
import { productDetails } from "./Pages/Products/Reducer/ProductReducer";
const reducers = combineReducers({
  product : productDetails,
});
export default reducers;
