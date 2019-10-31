import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from '../../../shared/models/Album';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as albumsReducer from '../../../store/reducers/albums.reducer';
import * as albumsActions from '../../../store/actions/albums.action';
import * as authReducer from '../../../store/reducers/auth.reducer';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit, OnDestroy {

  albums$: Observable<Array<Album>>;
  private userId$: string;
  private subscriptions: Subscription;

  constructor(
    private albumStore: Store<albumsReducer.State>,
    private authStore: Store<authReducer.State>,
  ) {
    this.albums$ = albumStore.select(albumsReducer.getAlbums);
    this.subscriptions = authStore.select(authReducer.getUserId)
      .subscribe(userId => this.userId$ = userId.toString());
  }

  ngOnInit() {
    this.albumStore.dispatch(new albumsActions.GetAllAction(this.userId$));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
