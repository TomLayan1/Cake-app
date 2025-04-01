import { combineReducers, createStore } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./Ice Cream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer);

// Create a type for the entire state
export type RootState = ReturnType <typeof rootReducer>

export default store