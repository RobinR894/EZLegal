import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerpostComponent } from './lawyerpost.component';

describe('LawyerpostComponent', () => {
  let component: LawyerpostComponent;
  let fixture: ComponentFixture<LawyerpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
