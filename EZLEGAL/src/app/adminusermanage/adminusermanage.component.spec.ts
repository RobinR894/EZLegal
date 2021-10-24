import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusermanageComponent } from './adminusermanage.component';

describe('AdminusermanageComponent', () => {
  let component: AdminusermanageComponent;
  let fixture: ComponentFixture<AdminusermanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusermanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusermanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
