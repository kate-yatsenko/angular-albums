import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Album } from '../../../shared/models/Album';
import { catchError } from 'rxjs/operators';
import { User } from '../../../shared/models/User/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(): Observable<Array<User>> {
    return this.http
      .get<Array<User>>(`https://jsonplaceholder.typicode.com/users?username=Bret&email=Sincere@april.biz`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
