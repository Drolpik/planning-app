import { TestBed } from '@angular/core/testing';

import { DailyMealsService } from './daily-meals.service';

describe('DailyMealsService', () => {
  let service: DailyMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
