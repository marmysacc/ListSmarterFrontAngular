import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss']
})
export class TaskListHeaderComponent implements OnInit {
  tasksbrowser = 'Browse your tasks:';
  constructor() { }

  ngOnInit() {
  }

}
