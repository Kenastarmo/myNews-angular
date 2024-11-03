import { Component, OnInit } from '@angular/core';
import { LatestNewsServiceService } from '../services/latest-news-service.service';
import { CommonModule } from '@angular/common';
import { LastItemComponent } from '../last-item/last-item.component';


@Component({
  selector: 'app-lates-news-component',
  standalone: true,
  imports: [CommonModule, LastItemComponent],
  templateUrl: './lates-news-component.component.html',
  styleUrl: './lates-news-component.component.scss'
})
export class LatesNewsComponentComponent implements OnInit {

  constructor( private latestNewsService: LatestNewsServiceService ) {}

  latestNews: any = [];

  ngOnInit(): void {
    this.latestNewsService.fetchLatestNews().subscribe(); 
    this.latestNewsService.getResults().subscribe(response => {
      this.latestNews = response;
      console.log("ovo su latestNews", this.latestNews);
    });
  }
  


}
