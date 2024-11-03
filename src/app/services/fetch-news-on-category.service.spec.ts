import { TestBed } from '@angular/core/testing';

import { FetchNewsOnCategoryService } from './fetch-news-on-category.service';

describe('FetchNewsOnCategoryService', () => {
  let service: FetchNewsOnCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchNewsOnCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
