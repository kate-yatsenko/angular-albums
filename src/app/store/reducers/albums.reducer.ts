import * as albumsAction from '../actions/albums.action';

import { Album } from '../../shared/models/Album';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State {
  albums: Array<Album>;
}

export const initialState: State = {
  albums: [],
};

export function reducer(state = initialState, action: albumsAction.Action) {
  switch (action.type) {
    case albumsAction.GET_ALL_SUCCESS: {
      const albums: Array<Album> = action.payload;

      return {
        ...state,
        albums
      };
    }

    default:
      return state;
  }
}

export const getAlbumsState = createFeatureSelector<State>('albums');

export const getAlbums = createSelector(
  getAlbumsState,
  (state: State) => state.albums
);


