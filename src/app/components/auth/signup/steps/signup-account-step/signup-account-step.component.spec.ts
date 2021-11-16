import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAccountStepComponent } from './signup-account-step.component';

describe('SignupStep1Component', () => {
  let component: SignupAccountStepComponent;
  let fixture: ComponentFixture<SignupAccountStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupAccountStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAccountStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
