import { TestBed } from '@angular/core/testing';

import { MasterSService } from './master-s.service';

describe('MasterSService', () => {
  let service: MasterSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
