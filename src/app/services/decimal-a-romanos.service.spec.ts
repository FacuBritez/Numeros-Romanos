import { TestBed } from '@angular/core/testing';

import { DecimalARomanosService } from './decimal-a-romanos.service';

describe('DecimalARomanosService', () => {
  let service: DecimalARomanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecimalARomanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
