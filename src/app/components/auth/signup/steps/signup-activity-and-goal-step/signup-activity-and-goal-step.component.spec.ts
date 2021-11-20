import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupActivityAndGoalStepComponent } from './signup-activity-and-goal-step.component';

describe('SignupDailyGoalsStepComponent', () => {
  let component: SignupActivityAndGoalStepComponent;
  let fixture: ComponentFixture<SignupActivityAndGoalStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupActivityAndGoalStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupActivityAndGoalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
