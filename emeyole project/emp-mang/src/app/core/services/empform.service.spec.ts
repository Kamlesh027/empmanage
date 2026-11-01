import { TestBed } from '@angular/core/testing';

import { EmpformService } from './empform.service';

describe('EmpformService', () => {
  let service: EmpformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
