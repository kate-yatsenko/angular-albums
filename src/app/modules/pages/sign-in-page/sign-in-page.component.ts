import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authReducer from '../../../store/reducers/auth.reducer';
import * as authActions from '../../../store/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  constructor(
    private store: Store<authReducer.State>,
    private router: Router
  ) {
    store.select(authReducer.getUser).subscribe(user => {
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

}
