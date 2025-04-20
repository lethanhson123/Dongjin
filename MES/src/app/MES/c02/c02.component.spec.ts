import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02Component } from './c02.component';

describe('C02Component', () => {
  let component: C02Component;
  let fixture: ComponentFixture<C02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
