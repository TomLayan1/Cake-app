import { BUY_CAKE } from "./cakeTypes";

type ActionType = {
  type: string;
  payload: number;
}

type InitialStateType = {
  numOfCakes: number;
}

const initialState: InitialStateType = {
  numOfCakes: 10
}

export const cakeReducer = (state=initialState, action: ActionType) => {
  switch(action?.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state?.numOfCakes - action?.payload
    }

    default: return state
  }
}

export default cakeReducer