import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininboxnmComponent } from './admininboxnm.component';

describe('AdmininboxnmComponent', () => {
  let component: AdmininboxnmComponent;
  let fixture: ComponentFixture<AdmininboxnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmininboxnmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininboxnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
