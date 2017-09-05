import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ArtistComponent} from './artist/artist.component';
import {SongComponent} from './song/song.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'artist', component: ArtistComponent},
    {path: 'song', component:SongComponent}
];