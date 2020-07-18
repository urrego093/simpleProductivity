import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PomodoroComponent} from "./pomodoro.component";

const routes: Routes = [
  {path: "pomodoro", pathMatch: "full", component: PomodoroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class PomodoroRoutingModule { }
