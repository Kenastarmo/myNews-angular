import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetNewsOnSearchService {
  private resultsSource = new BehaviorSubject<any[]>([]);
  currentResults = this.resultsSource.asObservable();

  constructor(private http: HttpClient) {}

  fetchData(value: string): Observable<any> {
    const apiURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&fq=business&api-key=81etIXTKe5WReUoGRB0imJgacXVKdfjZ`;
    return this.http.get<any>(apiURL).pipe(
      tap(data => this.resultsSource.next(data.response.docs))
    );
  }

  getResults(): Observable<any[]> {
    return this.currentResults;
  }
}
