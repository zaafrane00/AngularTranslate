import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAppComponent } from './feedback-app.component';

describe('FeedbackAppComponent', () => {
  let component: FeedbackAppComponent;
  let fixture: ComponentFixture<FeedbackAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
