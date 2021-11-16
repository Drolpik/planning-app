import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSummaryStepComponent } from './signup-summary-step.component';

describe('SignupStep3Component', () => {
  let component: SignupSummaryStepComponent;
  let fixture: ComponentFixture<SignupSummaryStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupSummaryStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSummaryStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
