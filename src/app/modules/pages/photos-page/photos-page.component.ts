import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Photo } from '../../../shared/models/Photo';
import { Store } from '@ngrx/store';

import * as photosReducer from '../../../store/reducers/photos.reducer';
import * as photosActions from '../../../store/actions/photos.action';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit, OnDestroy {

  private albumId: string;
  private subscriptions: Subscription;
  photos$: Observable<Array<Photo>>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<photosReducer.State>
  ) {
    this.subscriptions = route.params.subscribe(params => this.albumId = params.albumId);
    this.photos$ = store.select(photosReducer.getPhotos);
  }

  ngOnInit() {
    this.store.dispatch(new photosActions.GetAllAction(this.albumId));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
