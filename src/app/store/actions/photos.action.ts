import { Action } from '@ngrx/store';
import { Photo } from '../../shared/models/Photo';

export const GET_ALL = '[Photos] Get All';
export const GET_ALL_SUCCESS = '[Photos] Get All Success';

export class GetAllSuccessAction implements Action {
  readonly type = GET_ALL_SUCCESS;
  constructor(public payload: Array<Photo>) {}
}

export class GetAllAction implements Action {
  readonly type = GET_ALL;

  constructor(public payload: string) { }
}

export type Action = GetAllAction | GetAllSuccessAction;
