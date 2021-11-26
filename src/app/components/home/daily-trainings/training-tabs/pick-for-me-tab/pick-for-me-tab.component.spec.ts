import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickForMeTabComponent } from './pick-for-me-tab.component';

describe('PickForMeTabComponent', () => {
  let component: PickForMeTabComponent;
  let fixture: ComponentFixture<PickForMeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickForMeTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickForMeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
