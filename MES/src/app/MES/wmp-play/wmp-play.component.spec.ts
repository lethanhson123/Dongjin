import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMPPLAYComponent } from './wmp-play.component';

describe('WMPPLAYComponent', () => {
  let component: WMPPLAYComponent;
  let fixture: ComponentFixture<WMPPLAYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WMPPLAYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WMPPLAYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
