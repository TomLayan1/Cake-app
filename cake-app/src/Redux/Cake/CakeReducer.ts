import { BUY_CAKE } from "./cakeAction";

type InitialStateType = {
  numOfCakes: number
}

type ActionType = {
  type: string
}

const initialState: InitialStateType = {
  numOfCakes: 20
}

const cakeReducer = (state=initialState, action: ActionType) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
  }
}