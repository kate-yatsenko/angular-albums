import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/User/User';
import { Store } from '@ngrx/store';
import * as authReducer from '../../store/reducers/auth.reducer';
import * as authActions from '../../store/actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<authReducer.State>) {
    this.user$ = store.select(authReducer.getUser);
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new authActions.LogoutAction());
  }

}
