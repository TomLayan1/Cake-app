import { BUY_ICECREAM } from "./iceCreamType";

export const buyIceCream = (quantity: number) => {
  return {
    type: BUY_ICECREAM,
    payload: quantity
  }
}