import axios from 'axios';

import {
  FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,
FETCH_USER_FAILURE
} from './usertype';
import { Dispatch } from 'redux';

type UserType = {
  id: number,
  name: string
}


export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = (user: UserType[]) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

export const fetchUserFailure = (error: string) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}

export const fetchUser = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUserRequest());

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const user = response?.data;
      dispatch(fetchUserSuccess(user));
    }).catch(error => {
      dispatch(fetchUserFailure(error?.message));
    })
  }
}