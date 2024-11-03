import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  // Uvozi HeaderComponent kao standalone komponentu
import { FormComponentComponent } from './form-component/form-component.component';
import { ResultsComponent } from "./results/results.component";
//import { CategoriesComponent } from './categories/categories.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, FormComponentComponent, ResultsComponent, CategoriesComponent],
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'kenoApp';  
}
