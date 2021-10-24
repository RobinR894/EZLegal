import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerhomeComponent } from './lawyerhome.component';

describe('LawyerhomeComponent', () => {
  let component: LawyerhomeComponent;
  let fixture: ComponentFixture<LawyerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
