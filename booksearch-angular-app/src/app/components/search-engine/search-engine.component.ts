import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  private url = "https://www.googleapis.com/books/v1/volumes?q=";


  @HostListener("input", ["$event.target.value"])
  onInput(value) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
