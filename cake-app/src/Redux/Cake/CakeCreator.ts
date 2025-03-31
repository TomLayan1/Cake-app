import { BUY_CAKE } from "./cakeAction";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'Handles buying cake'
  }
}