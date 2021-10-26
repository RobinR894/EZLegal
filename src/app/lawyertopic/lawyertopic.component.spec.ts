import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyertopicComponent } from './lawyertopic.component';

describe('LawyertopicComponent', () => {
  let component: LawyertopicComponent;
  let fixture: ComponentFixture<LawyertopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyertopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyertopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
