import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ITask} from "../../shared/interfaces";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: ITask[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges( changes: SimpleChanges){
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'taskList': {
            //this.doSomething(change.currentValue) //filter by state maybe
          }
        }
      }
    }
  }

}
