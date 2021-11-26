import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsExpandListComponent } from './trainings-expand-list.component';

describe('TrainingsExpandListComponent', () => {
  let component: TrainingsExpandListComponent;
  let fixture: ComponentFixture<TrainingsExpandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingsExpandListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsExpandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
