import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  private url = "https://www.googleapis.com/books/v1/volumes?q=";
  private startIndex = 0;

  @HostListener("input", ["$event.target.value"])
  onInput(value) {
     
    let searchInput = this.url + value;
    let searchURL = this.url + value + `&maxResults=10&startIndex=${this.startIndex}`;
    
    
  }

  constructor() { }

  ngOnInit() {

    
  }
  
}
