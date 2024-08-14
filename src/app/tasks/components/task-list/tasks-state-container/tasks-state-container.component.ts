import { Component, Input, OnInit } from '@angular/core';
import { TaskStateModel } from 'src/app/shared/statistics/models/task-state-model';

@Component({
  selector: 'app-tasks-state-container',
  templateUrl: './tasks-state-container.component.html',
  styleUrls: ['./tasks-state-container.component.scss'],
})
export class TasksStateContainerComponent implements OnInit {
  @Input() taskState: TaskStateModel = {} as TaskStateModel;
  constructor() {}

  ngOnInit() {}
}
