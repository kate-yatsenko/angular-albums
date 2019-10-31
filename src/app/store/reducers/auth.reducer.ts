import * as authAction from '../actions/auth.action';

import { User } from '../../shared/models/User/User';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State {
  user: User;
}

export const initialState: State = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

export function reducer(state = initialState, action: authAction.Action) {
  switch (action.type) {
    case authAction.LOGIN_SUCCESS: {
      const user: User = action.payload;
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        user
      };
    }


    case authAction.LOGOUT: {
      localStorage.setItem('user', '');
      return {
        ...state,
        user: null
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
  (state: State) => state.user.id
);

