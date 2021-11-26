import { TestBed } from '@angular/core/testing';

import { CommonsMethodsService } from './commons-methods.service';

describe('CommonsMethodsService', () => {
  let service: CommonsMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonsMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
