import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02LISTComponent } from './c02-list.component';

describe('C02LISTComponent', () => {
  let component: C02LISTComponent;
  let fixture: ComponentFixture<C02LISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02LISTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02LISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
