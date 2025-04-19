import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01FileComponent } from './a01-file.component';

describe('A01FileComponent', () => {
  let component: A01FileComponent;
  let fixture: ComponentFixture<A01FileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01FileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
