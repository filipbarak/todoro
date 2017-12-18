import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimerDialogComponent } from './custom-timer-dialog.component';

describe('CustomTimerDialogComponent', () => {
  let component: CustomTimerDialogComponent;
  let fixture: ComponentFixture<CustomTimerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTimerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
