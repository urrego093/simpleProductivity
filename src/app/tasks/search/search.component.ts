import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  placeholder: string;
  filter: string;
  @Output() onChange = new EventEmitter();

  change() {
    this.onChange.emit(this.filter);
  }

  constructor() { }

  ngOnInit(): void {
    this.placeholder = "Search";
  }



}
