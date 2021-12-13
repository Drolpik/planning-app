import { TestBed } from '@angular/core/testing';

import { SearchMealsService } from './search-meals.service';

describe('SearchMealsService', () => {
  let service: SearchMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
