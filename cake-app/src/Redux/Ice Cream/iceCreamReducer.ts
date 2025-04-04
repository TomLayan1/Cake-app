import { BUY_ICECREAM } from "./iceCreamType";

export type IceCreamStateType = {
  numOfIceCream: number
}

export type CreamActionType = {
  type: typeof BUY_ICECREAM
  payload: number
}

const IceCreamState: IceCreamStateType = {
  numOfIceCream: 20
}

export const iceCreamReducer = (state = IceCreamState, action: CreamActionType) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCream: state?.numOfIceCream - (action.payload || 1)
    }

    default: return state
  }
}

export default iceCreamReducer