import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroTimmerComponent } from './pomodoro-timmer.component';

describe('PomodoroTimmerComponent', () => {
  let component: PomodoroTimmerComponent;
  let fixture: ComponentFixture<PomodoroTimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroTimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroTimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
