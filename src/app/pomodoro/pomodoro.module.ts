import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroRoutingModule } from './pomodoro-routing.module';
import {PomodoroComponent} from "./pomodoro.component";
import { PomodoroTimmerComponent } from './pomodoro-timmer/pomodoro-timmer.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [PomodoroComponent, PomodoroTimmerComponent],
  imports: [
    CommonModule,
    PomodoroRoutingModule,
    SharedModule
  ],
  exports: [PomodoroComponent]
})
export class PomodoroModule { }
