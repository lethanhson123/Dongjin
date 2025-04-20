import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02STOPComponent } from './c02-stop.component';

describe('C02STOPComponent', () => {
  let component: C02STOPComponent;
  let fixture: ComponentFixture<C02STOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02STOPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02STOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
