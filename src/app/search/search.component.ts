import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public result: string;
  constructor() { }

  ngOnInit() {
  }

  showResult(output: string) {
    console.log('function gets called: ' + output); 
    this.result = output;
  }
}
