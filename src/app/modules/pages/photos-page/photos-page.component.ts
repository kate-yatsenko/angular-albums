import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Lightbox } from 'ngx-lightbox';

import * as photosReducer from '../../../store/reducers/photos.reducer';
import * as photosActions from '../../../store/actions/photos.action';

interface HandledPhoto {
  src: string;
  caption: string;
  thumb: string;
}

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit, OnDestroy {

  private albumId: string;
  private subscriptions: Array<Subscription> = [];
  photos: Array<HandledPhoto>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<photosReducer.State>,
    private lightbox: Lightbox
  ) {
    this.subscriptions.push(route.params.subscribe(params => this.albumId = params.albumId));
    this.subscriptions.push(store.select(photosReducer.getPhotos).subscribe(photos => {
      this.photos = photos.map(photo => ({
        src: photo.url,
        caption: photo.title,
        thumb: photo.thumbnailUrl
      }));
    }));
  }

  ngOnInit() {
    this.store.dispatch(new photosActions.GetAllAction(this.albumId));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  open(index: number): void {
    this.lightbox.open(this.photos, index);
  }

  close(): void {
    this.lightbox.close();
  }

}
