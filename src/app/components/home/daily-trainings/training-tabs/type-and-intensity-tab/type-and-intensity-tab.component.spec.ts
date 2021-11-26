import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAndIntensityTabComponent } from './type-and-intensity-tab.component';

describe('TypeAndIntensityTabComponent', () => {
  let component: TypeAndIntensityTabComponent;
  let fixture: ComponentFixture<TypeAndIntensityTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAndIntensityTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAndIntensityTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
