import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './usertype';


type UserType = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  }
}

export type UserStateType = {
  loading: boolean,
  users: UserType[],
  error: string
}

export type ActionType =
  | { type: typeof FETCH_USER_REQUEST }
  | { type: typeof FETCH_USER_SUCCESS; payload: UserType[] }
  | { type: typeof FETCH_USER_FAILURE; payload: string };

const userState: UserStateType = {
  loading: false,
  users: [],
  error: '' 
}


export const userReducer = (state=userState, action: ActionType) => {
  switch(action.type) {
    case FETCH_USER_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_USER_SUCCESS: return {
      loading: false,
      users: action?.payload,
      error: ''
    }
    case FETCH_USER_FAILURE: return {
      loading: false,
      users: [],
      error: action.payload
    }

    default: return state;
  }
}

export default userReducer
