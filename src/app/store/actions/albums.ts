import { Action } from '@ngrx/store';
import { Album } from '../../shared/models/Album';

export const SELECT = '[Albums] Select';
export const GET_ALL = '[Albums] Get All';
export const GET_ALL_SUCCESS = '[Albums] Get All Success';

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: number) { }
}

export class GetAllSuccessAction implements Action {
  readonly type = GET_ALL_SUCCESS;
  constructor(public payload: Array<Album>) {}
}

export class GetAllAction implements Action {
  readonly type = GET_ALL;

  constructor() { }
}

export type Action = GetAllAction | SelectAction | GetAllSuccessAction;
