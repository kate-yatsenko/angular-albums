import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../../../shared/models/Album';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  getAlbums(userId: string): Observable<Array<Album>> {
    return this.http
      .get<Array<Album>>(`https://jsonplaceholder.typicode.com/albums`, { params: { userId } })
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
