import { Component, OnInit } from '@angular/core';
import {SongService} from './song.service';
import {ActivatedRoute} from '@angular/router';
import {Song} from './song';
import {ArtistComponent} from '../artist/artist.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
public song_info: Song;
public sng;
public arts;
  constructor(private songservice: SongService,
              private activatedRoute: ActivatedRoute) { }
   
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.sng = params['song_name'];
      this.arts = params['artist_name'];
      
      this.songservice.getAll(this.arts,this.sng).subscribe(
        data => {this.song_info = data.track;},
        error => console.log(error)
      )
    })
  }

}
