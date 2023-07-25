import { productDetails } from "./Pages/Products/Reducer/ProductsReducer";
import { selectedProduct } from "./Pages/Product/Reducer/ProductReducer";
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: "root",
  version: 1,
  storage
}
const reducers = combineReducers({
  product : productDetails,
  selectedProduct: selectedProduct,
});
const persistedReducer = persistReducer(persistConfig, reducers)

export default persistedReducer;
