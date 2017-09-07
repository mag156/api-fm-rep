import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Artist} from './artist';
import {environment} from './../../environments/environment';

@Injectable()  
export class ArtistService {
    private module ='id/';
    constructor(private http: Http) {}
    getAll(artist_mbid: string) {
        console.log('Artist service called to display artist info ' + 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=' + artist_mbid + '&api_key=95017bb8ab336c7df7cc6394b961dac5&format=json');
        return this.http.get
        ('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=' + artist_mbid + '&api_key=95017bb8ab336c7df7cc6394b961dac5&format=json')
        .map((res:Response) => res.json());
    }
    public load(artistId) {
        return this.http.get(environment.apiRoute + this.module + 'id?ARTIST_ID' + artistId)
        .map(res => res.json().data as Artist); 
    }
}