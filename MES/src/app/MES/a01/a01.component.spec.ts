import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01Component } from './a01.component';

describe('A01Component', () => {
  let component: A01Component;
  let fixture: ComponentFixture<A01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
