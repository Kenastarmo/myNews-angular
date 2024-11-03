// import { Component, EventEmitter, Output } from '@angular/core';
// import { FetchNewsOnCategoryService } from '../services/fetch-news-on-category.service';
// import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-categories',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.scss']
// })
// export class CategoriesComponent {
//   @Output() categoryChange = new EventEmitter<string>();

//   categories = [
//     { categoryName: 'Home', value: '', blackImg: '/homeBlack.svg', redImg: '/homeRed.svg'},
//     { categoryName: 'Business', value: 'business', blackImg: '/Business.svg', redImg: '/BusinessRed.svg'},
//     { categoryName: 'Health', value: 'health', blackImg: '/Health.svg', redImg: '/HealthRed.svg' },
//     { categoryName: 'Science', value: 'science', blackImg: '/Science1.svg', redImg: '/ScienceRed.svg' },
//   ];

//   private _category: 'business' | 'health' | 'sports' | 'technology' = 'business';

//   activeIndex: number = 0;

//   constructor(private fetchNewsOnCategory: FetchNewsOnCategoryService) {
//     this.fetchNewsOnCategory.fetchNewsOnCategory(this._category).subscribe();
//   }

//   setCategory(value: string, index: number) {
//     this.setActive(index);
//     console.log("aktivna kategorija je :", this.activeIndex)

//     const newCategory = value as 'business' | 'health' | 'sports' | 'technology';
//     if (this._category !== newCategory) {
//       this._category = newCategory;
//       this.categoryChange.emit(this._category);
//       this.fetchNewsOnCategory.fetchNewsOnCategory(this._category).subscribe();
//     }
//   }


//   setActive(index: number){
//     this.activeIndex = index;
//   }

// }


import { Component } from '@angular/core';
import { FetchNewsOnCategoryService } from '../services/fetch-news-on-category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories = [
    { categoryName: 'Home', value: '', blackImg: '/homeBlack.svg', redImg: '/homeRed.svg' },
    { categoryName: 'Business', value: 'business', blackImg: '/Business.svg', redImg: '/BusinessRed.svg' },
    { categoryName: 'Health', value: 'health', blackImg: '/Health.svg', redImg: '/HealthRed.svg' },
    { categoryName: 'Science', value: 'science', blackImg: '/Science1.svg', redImg: '/ScienceRed.svg' },
  ];

  private _category: string = 'business'; 
  activeIndex: number = 0;

  constructor(private fetchNewsOnCategory: FetchNewsOnCategoryService) {
    this.fetchNewsOnCategory.fetchNewsOnCategory(this._category).subscribe();
  }

  setCategory(value: string, index: number) {
    this.setActive(index);
    const newCategory = value;

    if (this._category !== newCategory) {
      this._category = newCategory;
      this.fetchNewsOnCategory.fetchNewsOnCategory(this._category).subscribe();
    }
  }

  setActive(index: number) {
    this.activeIndex = index;
  }
}
