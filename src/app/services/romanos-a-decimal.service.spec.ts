import { TestBed } from '@angular/core/testing';

import { RomanosADecimalService } from './romanos-a-decimal.service';

describe('RomanosADecimalService', () => {
  let service: RomanosADecimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanosADecimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
