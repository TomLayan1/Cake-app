import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
// import { createLogger } from "redux-logger";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./Ice Cream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

// const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));

// Create a type for the entire state
export type RootState = ReturnType <typeof rootReducer>

export default store