import { createStore } from "redux";
import cakeReducer from "./Cake/CakeReducer";


const store = createStore(cakeReducer);

// Create a type for the entire state
export type RootState = ReturnType <typeof store.getState>

export default store