import { TestBed } from '@angular/core/testing';

import { GetNewsOnSearchService } from './get-news-on-search.service';

describe('GetNewsOnSearchService', () => {
  let service: GetNewsOnSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNewsOnSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
