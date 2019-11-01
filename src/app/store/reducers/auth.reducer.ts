import * as authAction from '../actions/auth.action';

import { User } from '../../shared/models/User/User';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State {
  user: User;
  message: string;
}

export const initialState: State = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  message: ''
};

export function reducer(state = initialState, action: authAction.Action) {
  switch (action.type) {
    case authAction.LOGIN_SUCCESS: {
      const user: User = action.payload;
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        user,
        message: ''
      };
    }


    case authAction.LOGOUT: {
      localStorage.setItem('user', '');
      return {
        ...state,
        user: null
      };
    }

    case authAction.LOGIN_INVALID: {
      return {
        ...state,
        message: 'User does not exist.'
      };
    }

    default:
      return state;
  }
}

export const getAuthState = createFeatureSelector<State>('auth');

export const getUser = createSelector(
  getAuthState,
  (state: State) => state.user
);

export const getUserId = createSelector(
  getAuthState,
  (state: State) => state.user ? state.user.id : ''
);

export const getMessage = createSelector(
  getAuthState,
  (state: State) => state.message
);

