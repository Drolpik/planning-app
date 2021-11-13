import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealExpandListComponent } from './meal-expand-list.component';

describe('MealExpandListComponent', () => {
  let component: MealExpandListComponent;
  let fixture: ComponentFixture<MealExpandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealExpandListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealExpandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
