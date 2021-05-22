import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albumsList$: Object;
  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.data.getAlbums().subscribe(
      
      (data: any) => this.albumsList$ = data
    )
  }

}

