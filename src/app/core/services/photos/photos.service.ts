import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../../shared/models/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  getPhotos(albumId: string): Observable<Array<Photo>> {
    return this.http
      .get<Array<Photo>>(`https://jsonplaceholder.typicode.com/photos`, { params: { albumId } })
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
