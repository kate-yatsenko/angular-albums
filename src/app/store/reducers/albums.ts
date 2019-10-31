import * as albumsAction from '../actions/albums';

import { Album } from '../../shared/models/Album';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State {
  albums: Array<Album>;
  selected: number;
}

export const initialState: State = {
  albums: [],
  selected: null,
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


    case albumsAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}

export const getArticleState = createFeatureSelector<State>('albums');

export const getAlbums = createSelector(
  getArticleState,
  (state: State) => state.albums
);

export const getSelected = createSelector(
  getArticleState,
  (state: State) => state.selected
);

