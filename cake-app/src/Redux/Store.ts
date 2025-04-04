import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./Ice Cream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

// Create a type for the entire state
export type RootState = ReturnType <typeof rootReducer>

export default store