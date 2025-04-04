import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (quantity: number) => {
  return {
    type: BUY_CAKE,
    payload: quantity
  }
}

// Define action type
export type CakeActionType = ReturnType<typeof buyCake>;