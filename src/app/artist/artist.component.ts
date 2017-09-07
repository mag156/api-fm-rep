import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {ArtistService} from './artist.service';
import {Artist} from './artist';
import {ActivatedRoute} from '@angular/router';
import {SongComponent} from '../song/song.component';
import {Song} from '../song/song';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() artistId: string='';
  public artist_info: Artist;
  public mbids;
    constructor(private activatedRoute:ActivatedRoute, private artistService:ArtistService) { 
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges for Artist component data");
    console.log(this.artistId);
    this.artistService.getAll(this.artistId).subscribe(
      data => {this.artist_info = data.artist;},
      error => console.log(error)
    );

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params ['mbid']) {
        this.mbids = params['mbid'];
      this.artistService.getAll(this.mbids).subscribe(
      data => {this.artist_info = data.artist;},
      error => console.log(error)
    );
      }

      
    });
  }
}
