import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscodeComponent } from './tscode.component';

describe('TscodeComponent', () => {
  let component: TscodeComponent;
  let fixture: ComponentFixture<TscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TscodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
