import { TestBed } from '@angular/core/testing';

import { ProjechService } from './projech.service';

describe('ProjechService', () => {
  let service: ProjechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
