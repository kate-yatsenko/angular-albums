import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as albumsActions from '../actions/albums';
import { AlbumsService } from '../../core/services/albums/albums.service';

@Injectable()
export class AlbumsEffects {
  constructor(
    private actions$: Actions,
    private albumsService: AlbumsService
  ) {
  }

  @Effect()
  loadAlbums$ = this.actions$.pipe(
    ofType(albumsActions.GET_ALL),
    switchMap(() => {
      return this.albumsService
        .getAlbums()
        .pipe(
          map(albums => new albumsActions.GetAllSuccessAction(albums))
        );
    })
  );

}
