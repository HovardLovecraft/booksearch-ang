import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})


export class SearchEngineComponent implements OnInit, OnDestroy {

  inputUrl : string = "https://www.googleapis.com/books/v1/volumes?q=";
  private startIndex : number = 0;
  subData: Subscription;
  inputValue: string;
  inputURL: string;

  constructor(private dataService: DataService) { }

  @HostListener("input", ["$event.target.value"])
  onInput(value) {
    this.inputValue = value;
    this.inputURL = this.inputUrl + this.inputValue + `&maxResults=10&startIndex=${this.startIndex}`;

  }

  getData(){
    this.subData = this.dataService.getBooksData(this.inputURL).subscribe();
  }

  ngOnInit() {

  ngOnDestroy() {
    this.subData.unsubscribe();
  }
  
}