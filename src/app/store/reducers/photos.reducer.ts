import * as photosAction from '../actions/photos.action';

import { Photo } from '../../shared/models/Photo';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State {
  photos: Array<Photo>;
}

export const initialState: State = {
  photos: [],
};

export function reducer(state = initialState, action: photosAction.Action) {
  switch (action.type) {
    case photosAction.GET_ALL_SUCCESS: {
      const photos: Array<Photo> = action.payload;

      return {
        ...state,
        photos
      };
    }

    default:
      return state;
  }
}

export const getPhotosState = createFeatureSelector<State>('photos');

export const getPhotos = createSelector(
  getPhotosState,
  (state: State) => state.photos
);


