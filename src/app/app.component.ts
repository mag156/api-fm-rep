import { Component } from '@angular/core';
import {IndexService} from './index/index.service';
import {ArtistService} from './artist/artist.service';
import {SongService} from './song/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IndexService, ArtistService, SongService]
})
export class AppComponent {
  title = 'app';
}
