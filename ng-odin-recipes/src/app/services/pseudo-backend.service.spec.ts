import { TestBed } from '@angular/core/testing';

import { PseudoBackendService } from './pseudo-backend.service';

describe('PseudoBackendService', () => {
  let service: PseudoBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PseudoBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
