import { TestBed } from '@angular/core/testing';

import { UsureService } from './usure.service';

describe('UsureService', () => {
  let service: UsureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
