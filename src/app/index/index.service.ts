import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IndexService {
    constructor(private http:Http) { }
        getAll() {
            console.log('Index service called to display top songs');
            return this.http.get
            ('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=95017bb8ab336c7df7cc6394b961dac5&format=json')
            .map((res:Response) => res.json());
        }
    
}