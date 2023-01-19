import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalARomanosComponent } from './decimal-a-romanos.component';

describe('DecimalARomanosComponent', () => {
  let component: DecimalARomanosComponent;
  let fixture: ComponentFixture<DecimalARomanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalARomanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecimalARomanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
