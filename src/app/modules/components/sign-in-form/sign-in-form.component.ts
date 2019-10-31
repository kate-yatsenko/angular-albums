import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  loginGroup: FormGroup;
  @Output() userLogin: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.loginGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  login() {
    if (this.loginGroup.status === 'VALID') {
      this.userLogin.emit(this.loginGroup.value);
    }
  }
}
