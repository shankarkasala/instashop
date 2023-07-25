import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import persistedReducer from "./Reducer";
import { persistStore } from "redux-persist";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

let persistor = persistStore(store)

export {persistor}
