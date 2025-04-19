import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscodeDetailComponent } from './tscode-detail.component';

describe('TscodeDetailComponent', () => {
  let component: TscodeDetailComponent;
  let fixture: ComponentFixture<TscodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TscodeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TscodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
