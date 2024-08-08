import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStateModel } from 'src/app/shared/statistics/models/task-state-model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() taskState: Observable<TaskStateModel[]> | undefined;
  constructor() {}

  ngOnInit() {}
}
