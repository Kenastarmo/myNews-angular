import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchNewsOnCategoryService {

  private resultSource = new BehaviorSubject<any[]>([]);
  currentResult = this.resultSource.asObservable();

  constructor( private http: HttpClient) { }

  fetchNewsOnCategory(category:string): Observable<any>{
    const apiURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${category}&api-key=81etIXTKe5WReUoGRB0imJgacXVKdfjZ`;
    return this.http.get<any>(apiURL).pipe(
      tap(data => this.resultSource.next(data.response.docs))
    )
  }

  getResults(): Observable<any>{
    return this.currentResult;
  }

}
