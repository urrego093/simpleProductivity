import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TasksModule} from "./tasks/tasks.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import { AppRoutingModule } from './app-routing.module';
import {PomodoroModule} from "./pomodoro/pomodoro.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TasksModule, SharedModule, CoreModule, PomodoroModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
