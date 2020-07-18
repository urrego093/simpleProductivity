import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITask} from "../shared/interfaces";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  basePath: String = 'assets/';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<ITask[]> {
    console.log("calling");
    return this.http.get<ITask[]>(this.basePath + 'tasks.json').pipe(
      // map(tasks => {
      //     let taskList: ITask[] = tasks;
      //     return taskList;
      //   }
      // ),
      catchError(this.handleError)
    );//end pipe
    console.log("called");
  }//end getTasks

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;

      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    // return Observable.throw(error || 'Node.js server error');
    return throwError(error || 'Node.js server error')
  }

}
