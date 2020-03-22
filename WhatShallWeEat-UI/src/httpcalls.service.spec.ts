import { TestBed } from '@angular/core/testing';

import { HttpCallsService } from './httpcalls.service';

describe('HttpcallsService', () => {
  let service: HttpCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
