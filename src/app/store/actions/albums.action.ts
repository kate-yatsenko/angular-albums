import { Action } from '@ngrx/store';
import { Album } from '../../shared/models/Album';

export const GET_ALL = '[Albums] Get All';
export const GET_ALL_SUCCESS = '[Albums] Get All Success';

export class GetAllSuccessAction implements Action {
  readonly type = GET_ALL_SUCCESS;
  constructor(public payload: Array<Album>) {}
}

export class GetAllAction implements Action {
  readonly type = GET_ALL;

  constructor(public payload: string) { }
}

export type Action = GetAllAction | GetAllSuccessAction;
