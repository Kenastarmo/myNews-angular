import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject,tap  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestNewsServiceService {

  private resultSource = new BehaviorSubject<any>([]);
  currentResults = this.resultSource.asObservable();

  constructor(private http: HttpClient ) { }

  fetchLatestNews(): Observable<any>  {
    const apiURL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=81etIXTKe5WReUoGRB0imJgacXVKdfjZ`;
    return this.http.get<any>(apiURL).pipe(
      tap(data => this.resultSource.next(data.results))
    )
  }

  getResults(): Observable<any[]> {
    return this.currentResults;
  }

}
