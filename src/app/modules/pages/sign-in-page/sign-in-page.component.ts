import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import * as authReducer from '../../../store/reducers/auth.reducer';
import * as authActions from '../../../store/actions/auth.action';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription;

  constructor(
    private store: Store<authReducer.State>,
    private router: Router
  ) {
    this.subscriptions = store.select(authReducer.getUser).subscribe(user => {
      if (user) {
        router.navigate(['albums']);
      }
    });
  }

  ngOnInit() {
  }

  public signIn(userData: object) {
    this.store.dispatch(new authActions.LoginAction(userData));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
