import { ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromAlbums from './albums.reducer';
import * as fromAuth from './auth.reducer';
import * as fromPhotos from './photos.reducer';
export interface State {
  albums: fromAlbums.State;
  auth: fromAuth.State;
  photos: fromPhotos.State;
}
export const reducers: ActionReducerMap<State> = {
  albums: fromAlbums.reducer,
  auth: fromAuth.reducer,
  photos: fromPhotos.reducer,
};
export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = [logger];
