import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { GetNewsOnSearchService } from '../services/get-news-on-search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  myForm: FormGroup;
  results: any[] = [];

  constructor(private fb: FormBuilder, private getNews: GetNewsOnSearchService) {
    this.myForm = this.fb.group({
      inputValue: ['']
    });

    this.myForm.get('inputValue')?.valueChanges.subscribe(value => {
      console.log(value);
      if(value.length > 2){
        this.getNews.fetchData(value).subscribe(data => {
          console.log("Fetchani podaci su: ", data.response.docs);
          this.results = data.response.docs;
          console.log(this.results)
        }
        )
      }
      // else{
      //   this.results = [];
      // }
    });
  }
}
