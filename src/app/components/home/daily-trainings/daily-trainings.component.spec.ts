import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTrainingsComponent } from './daily-trainings.component';

describe('DailyTrainingsComponent', () => {
  let component: DailyTrainingsComponent;
  let fixture: ComponentFixture<DailyTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
