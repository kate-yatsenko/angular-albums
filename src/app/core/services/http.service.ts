import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/User/User';
import { Album } from '../../shared/models/Album';
import { Photo } from '../../shared/models/Photo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private user: User;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(username: string, email: string) {
    this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users', {
      params: {
        username,
        email
      }
    }).subscribe(users => {
      this.user = users[0];
      this.router.navigate(['albums']);
    });
  }

  public getUser() {
    return this.user;
  }

  public getAlbums(userId: string): Observable<Array<Album>> {
    return this.http.get<Array<Album>>('https://jsonplaceholder.typicode.com/albums', { params: { userId } });
  }

  public getPhotos(albumId: string): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos', { params: { albumId } });
  }
}
