import { Component, OnInit } from '@angular/core';
import { FetchNewsOnCategoryService } from '../services/fetch-news-on-category.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { LatesNewsComponentComponent } from "../lates-news-component/lates-news-component.component";

interface NewsItem {
  headline: {
    main: string;
  };
  multimedia: any[];
  pub_date: string; 
}

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, CardComponent, LatesNewsComponentComponent],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  newResults: NewsItem[] = [];
  first4Results: NewsItem[] = [];
  otherResults: NewsItem[] = [];

  constructor(private fetchNewsOnCategory: FetchNewsOnCategoryService) {}

  defaultImg = '/newdefaultnews.png';

  ngOnInit(): void {
    this.fetchNewsOnCategory.getResults().subscribe((data: any[]) => {
      this.newResults = data;
      console.log("ovo su new reuslts koje trazis ",this.newResults);
      console.log("ovo je datum neformatiran", this.newResults[0].pub_date)

      this.first4Results = this.newResults.slice(0, 4);
      this.otherResults = this.newResults.slice(4);

      console.log('Prva četiri elementa:', this.first4Results);
      console.log('Preostali elementi:', this.otherResults);
    });
  }
}
