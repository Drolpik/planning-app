import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFromListTabComponent } from './choose-from-list-tab.component';

describe('ChooseFromListTabComponent', () => {
  let component: ChooseFromListTabComponent;
  let fixture: ComponentFixture<ChooseFromListTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFromListTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFromListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
