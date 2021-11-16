import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPersonalStepComponent } from './signup-personal-step.component';

describe('SignupStep2Component', () => {
  let component: SignupPersonalStepComponent;
  let fixture: ComponentFixture<SignupPersonalStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupPersonalStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPersonalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
