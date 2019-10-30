import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../../shared/models/Album';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {

  public albums: Array<Album> = [];

  constructor(
    private http: HttpService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.http.getAlbums('1').subscribe(albums => this.albums = albums);
  }

}
