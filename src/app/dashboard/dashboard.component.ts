import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  posts$: number;
  albums$: number;
  users$: number;
  constructor(private data: DataService) { }

  ngOnInit(): void {
     

    this.data.getPosts().subscribe(
      
      (data: any) => this.posts$ = data.length 
    )

    this.data.getUsers().subscribe(
      (data: any) => this.users$ = data.length
    ); 

    this.data.getAlbums().subscribe(
      (data: any) => this.albums$ = data.length
    ); 

  }
}
