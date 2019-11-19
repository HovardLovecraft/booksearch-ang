import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    responseData = new Subject<any>();
     
    constructor(private http: HttpClient) {}

    getBooksData(url: string) {
        return this.http.get(url)
            .pipe(map(response => {
                this.responseData.next(response);
                console.log(response)
            }))
    }

    getResponseData() {
        return this.responseData.asObservable();
    }

}