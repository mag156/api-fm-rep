import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { IndexComponent } from './index/index.component';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ArtistComponent } from './artist/artist.component';
import { SongComponent } from './song/song.component'; //added for api
import {routes} from './app.routes';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    IndexComponent,
    ArtistComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule //added for api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
