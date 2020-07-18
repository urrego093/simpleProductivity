import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TaskListComponent} from "./task-list/task-list.component";
import {FormsModule} from "@angular/forms";
import { TasksComponent } from './tasks.component';
import { SearchComponent } from './search/search.component';
import {TasksRoutingModule} from "./tasks-routing.module";

@NgModule({
  declarations: [TaskListComponent, TasksComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule, TasksRoutingModule
  ],
  exports: [TasksComponent]
})
export class TasksModule { }
