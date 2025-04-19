import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01PNADDComponent } from './a01-pnadd.component';

describe('A01PNADDComponent', () => {
  let component: A01PNADDComponent;
  let fixture: ComponentFixture<A01PNADDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01PNADDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01PNADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
