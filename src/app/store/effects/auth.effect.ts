import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as authActions from '../actions/auth.action';
import { AuthService } from '../../core/services/auth/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }

  @Effect()
  loadAuth$ = this.actions$.pipe(
    ofType<authActions.LoginAction>(authActions.LOGIN),
    switchMap(data => {
      return this.authService
        .login(data.payload)
        .pipe(
          map(auth => {
            if (auth[0]) {
              return new authActions.LoginSuccessAction(auth[0]);
            } else {
              return new authActions.LoginWithInvalidDataAction();
            }
          })
        );
    })
  );

}
