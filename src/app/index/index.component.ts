import { Component, OnInit } from '@angular/core';
import {Index} from './index';
import {IndexService} from './index.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexService]
})
export class IndexComponent implements OnInit {
  topSongs: Index[];

  constructor(private indexService: IndexService) {}

  ngOnInit() {
    this.indexService.getAll().subscribe(
      data => {this.topSongs = data.tracks.track;},
      error => console.log(error)
    );
  }

}
