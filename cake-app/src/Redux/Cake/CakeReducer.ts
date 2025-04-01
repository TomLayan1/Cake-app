import { BUY_CAKE } from "./cakeTypes";

type ActionType = {
  type: string;
}

type InitialStateType = {
  numOfCakes: number;
}

const initialState: InitialStateType = {
  numOfCakes: 20
}
export const cakeReducer = (state=initialState, action: ActionType) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

export default cakeReducer