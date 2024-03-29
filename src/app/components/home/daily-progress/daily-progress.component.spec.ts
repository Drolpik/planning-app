import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProgressComponent } from './daily-progress.component';

describe('DailyProgressComponent', () => {
  let component: DailyProgressComponent;
  let fixture: ComponentFixture<DailyProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
