import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit, DoCheck {

  public user: object;

  constructor(
    private http: HttpService,
  ) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.http.getUser()) {
      localStorage.setItem('user', JSON.stringify(this.http.getUser()));
    }
  }

  public login() {
    this.http.login('Bret', 'Sincere@april.biz');
  }

}
