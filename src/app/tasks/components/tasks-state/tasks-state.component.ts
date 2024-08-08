import { Component, Input, OnInit } from '@angular/core';
import { TaskStateModel } from 'src/app/shared/statistics/models/task-state-model';

@Component({
  selector: 'app-tasks-state',
  templateUrl: './tasks-state.component.html',
  styleUrls: ['./tasks-state.component.scss'],
})
export class TasksStateComponent implements OnInit {
  @Input() taskState: TaskStateModel = {} as TaskStateModel;
  constructor() {}

  ngOnInit() {}
}
