import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArtistService} from './artist.service';
import {Artist} from './artist';
import {ActivatedRoute} from '@angular/router';
import {SongComponent} from '../song/song.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
 
})
export class ArtistComponent implements OnInit {
  public artist_info: Artist;
  public mbids;
    constructor(private activatedRoute:ActivatedRoute, private artistService:ArtistService) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.mbids = params['mbid'];
      this.artistService.getAll(this.mbids).subscribe(
      data => {this.artist_info = data;},
      error => console.log(error)
    );
    });
  }
}
