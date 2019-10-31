import { Action } from '@ngrx/store';
import { User } from '../../shared/models/User/User';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Get All';
export const LOGOUT = '[Auth] Logout';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor() { }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: User) {}
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor() { }
}

export type Action = LoginAction | LoginSuccessAction | LogoutAction;
