import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B09Component } from './b09.component';

describe('B09Component', () => {
  let component: B09Component;
  let fixture: ComponentFixture<B09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
