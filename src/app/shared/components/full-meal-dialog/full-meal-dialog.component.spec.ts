import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMealDialogComponent } from './full-meal-dialog.component';

describe('FullMealDialogComponent', () => {
  let component: FullMealDialogComponent;
  let fixture: ComponentFixture<FullMealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullMealDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
