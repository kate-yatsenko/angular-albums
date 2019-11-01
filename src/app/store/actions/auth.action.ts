import { Action } from '@ngrx/store';
import { User } from '../../shared/models/User/User';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Get All';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_INVALID = '[Auth] Login with invalid data';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: object) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: User) {
  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor() {
  }
}

export class LoginWithInvalidDataAction implements Action {
  readonly type = LOGIN_INVALID;

  constructor() {
  }
}

export type Action = LoginAction | LoginSuccessAction | LogoutAction | LoginWithInvalidDataAction;
