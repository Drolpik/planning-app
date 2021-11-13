import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMealsComponent } from './search-meals.component';

describe('SearchMealsComponent', () => {
  let component: SearchMealsComponent;
  let fixture: ComponentFixture<SearchMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
