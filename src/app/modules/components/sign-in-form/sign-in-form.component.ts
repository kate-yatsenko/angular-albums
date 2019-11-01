import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit, OnDestroy {

  loginGroup: FormGroup;
  submit = false;
  private subscriptions: Subscription;
  @Output() userLogin: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.loginGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.subscriptions = this.loginGroup.valueChanges.subscribe(() => {
      this.submit = false;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  login() {
    this.submit = true;
    if (this.loginGroup.status === 'VALID') {
      this.userLogin.emit(this.loginGroup.value);
    }
  }
}
