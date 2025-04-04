import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (quantity: number) => {
  return {
    type: BUY_CAKE,
    payload: quantity
  }
}