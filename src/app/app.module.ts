import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { IndexComponent } from './index/index.component';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http'; //added for api

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule //added for api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
