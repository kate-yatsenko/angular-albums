import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../../shared/models/User/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(userData: object): Observable<Array<User>> {
    return this.http
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users', { params: { ...userData } })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  isAuth(): boolean {
    return Boolean(localStorage.getItem('user'));
  }
}
