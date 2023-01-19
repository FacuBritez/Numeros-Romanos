import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanosADecimalComponent } from './romanos-a-decimal.component';

describe('RomanosADecimalComponent', () => {
  let component: RomanosADecimalComponent;
  let fixture: ComponentFixture<RomanosADecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanosADecimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanosADecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
