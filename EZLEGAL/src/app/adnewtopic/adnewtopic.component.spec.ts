import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnewtopicComponent } from './adnewtopic.component';

describe('AdnewtopicComponent', () => {
  let component: AdnewtopicComponent;
  let fixture: ComponentFixture<AdnewtopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdnewtopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnewtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
