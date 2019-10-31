import { Component, DoCheck, OnInit } from '@angular/core';
import { Album } from '../../../shared/models/Album';
import * as albumsReducer from '../../../store/reducers/albums';
import * as albumsActions from '../../../store/actions/albums';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit, DoCheck {

  albums$: Observable<Array<Album>>;

  constructor(
    private store: Store<albumsReducer.State>,
  ) {
    this.albums$ = store.select(albumsReducer.getAlbums);
  }

  ngOnInit() {
    this.store.dispatch(new albumsActions.GetAllAction());
  }

  ngDoCheck(): void {
    console.log(this.albums$);
  }


}
