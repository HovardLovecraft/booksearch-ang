import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  renderBooks: Subscription;
  renderData: any;

  constructor(private dataService: DataService) { }
  

  ngOnInit() {
    this.renderBooks = this.dataService.getResponseData().subscribe(data => this.renderData = data.items);
  }

  ngOnDestroy(){
    this.renderBooks.unsubscribe();
  }

}
