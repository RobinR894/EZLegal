import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertopicComponent } from './usertopic.component';

describe('UsertopicComponent', () => {
  let component: UsertopicComponent;
  let fixture: ComponentFixture<UsertopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
