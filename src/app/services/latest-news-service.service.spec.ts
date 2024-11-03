import { TestBed } from '@angular/core/testing';

import { LatestNewsServiceService } from './latest-news-service.service';

describe('LatestNewsServiceService', () => {
  let service: LatestNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
