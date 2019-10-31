import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/User/User';
import { Store } from '@ngrx/store';
import * as authReducer from '../../../store/reducers/auth.reducer';
import * as authActions from '../../../store/actions/auth.action';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<authReducer.State>) {
    this.user$ = store.select(authReducer.getUser);
  }

  ngOnInit() {
  }

  public login() {
    this.store.dispatch(new authActions.LoginAction());
  }

}
