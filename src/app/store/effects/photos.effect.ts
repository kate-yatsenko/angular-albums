import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as photosActions from '../actions/photos.action';
import { PhotosService } from '../../core/services/photos/photos.service';

@Injectable()
export class PhotosEffects {
  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {
  }

  @Effect()
  loadPhotos$ = this.actions$.pipe(
    ofType<photosActions.GetAllAction>(photosActions.GET_ALL),
    switchMap(data => {
      return this.photosService
        .getPhotos(data.payload)
        .pipe(
          map(photos => new photosActions.GetAllSuccessAction(photos))
        );
    })
  );
}
