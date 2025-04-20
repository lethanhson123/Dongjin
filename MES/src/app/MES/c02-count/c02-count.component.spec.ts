import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02COUNTComponent } from './c02-count.component';

describe('C02COUNTComponent', () => {
  let component: C02COUNTComponent;
  let fixture: ComponentFixture<C02COUNTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02COUNTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02COUNTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
