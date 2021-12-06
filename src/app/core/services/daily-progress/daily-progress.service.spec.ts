import { TestBed } from '@angular/core/testing';

import { DailyProgressService } from './daily-progress.service';

describe('DailyProgressService', () => {
  let service: DailyProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
