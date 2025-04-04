import { BUY_ICECREAM } from "./iceCreamType";

type InitialIceCreamStateType = {
  numOfIceCream: number
}

type ActionType = {
  type: string
  payload: number
}

const initialIceCreamState: InitialIceCreamStateType = {
  numOfIceCream: 20
}

export const iceCreamReducer = (state=initialIceCreamState, action: ActionType) => {
  switch(action?.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCream: state?.numOfIceCream - action?.payload
    }

    default: return state
  }
}

export default iceCreamReducer