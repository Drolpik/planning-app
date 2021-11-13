import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMealsFormComponent } from './search-meals-form.component';

describe('SearchMealsFormComponent', () => {
  let component: SearchMealsFormComponent;
  let fixture: ComponentFixture<SearchMealsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMealsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMealsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
