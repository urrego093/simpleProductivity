import {Component, OnInit} from '@angular/core';
import {ITask} from "../shared/interfaces";
import {Data} from "@angular/router";
import {DataService} from "../core/data.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksList: ITask[];
  taskList_filtered: ITask[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getTasks().subscribe((tasks: ITask[]) => this.taskList_filtered = this.tasksList = tasks);
    // this.taskList_filtered = this.tasksList = [
    //   {id: 1, name: "task 1", description: "aaaa", done: true},
    //   {id: 2, name: "task 2", description: "aba", done: false},
    //   {id: 3, name: "task 3", description: "abcdda", done: false}
    // ];

  }

  clickSubmit() {
    console.log("Saving....")
  }

  filter(filter: string) {
    if (filter) {
      this.taskList_filtered = this.tasksList.filter(
        task => task.name.includes(filter)
          || task.description.includes(filter)
      )

    } else {
      this.taskList_filtered = this.tasksList;
    }

  }

}
