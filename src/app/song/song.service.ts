import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SongService{
    constructor(private http:Http) {}
    getAll(artist_name: string, song_name:string) {
        console.log("Song service called to display info about the song" + 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=95017bb8ab336c7df7cc6394b961dac5&artist=' + artist_name + '&track=' + song_name + '&format=json');
        return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=95017bb8ab336c7df7cc6394b961dac5&artist=' + artist_name + '&track=' + song_name + '&format=json')
        .map((res:Response) => res.json());

    }
}
