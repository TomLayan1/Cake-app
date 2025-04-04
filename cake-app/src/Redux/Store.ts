import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./Ice Cream/iceCreamReducer";
import userReducer from "./User/userReducer";

// Combine reducers with clear keys
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
});

// RootState type from combined reducers
export type RootState = ReturnType<typeof rootReducer>;

// Create store with middleware
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(logger, thunk))
);


export default store;