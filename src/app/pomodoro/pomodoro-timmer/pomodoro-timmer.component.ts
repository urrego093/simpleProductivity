import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pomodoro-timmer',
  templateUrl: './pomodoro-timmer.component.html',
  styleUrls: ['./pomodoro-timmer.component.css']
})
export class PomodoroTimmerComponent implements OnInit {

  currentTime: number;
  @Input() initTime: number;
  @Input() timerClass: string;
  timerInterval: number;
  active: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.currentTime = 0;
    this.timerInterval = 1000;
    this.active = false;
  }

  start() {
    if (this.currentTime < this.initTime) {
      this.active = true;
      let timer = setInterval(() => {
        if (this.active) {
          this.currentTime += this.timerInterval;
          if (this.currentTime >= this.initTime) {
            clearInterval(timer);
            this.active = false;
          }
        }
      }, 1000);
    }//end if
  }

  stop() {
    this.active = false;
  }

}
