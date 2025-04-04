import { BUY_CAKE } from "./cakeTypes";

export type CakeActionType = {
  type: typeof BUY_CAKE;
  payload: number;
}

export type InitialStateType = {
  numOfCakes: number;
}

const cakeState: InitialStateType = {
  numOfCakes: 10
}

export const cakeReducer = (state = cakeState, action: CakeActionType): InitialStateType => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state?.numOfCakes - action.payload
    }

    default: return state
  }
}

export default cakeReducer