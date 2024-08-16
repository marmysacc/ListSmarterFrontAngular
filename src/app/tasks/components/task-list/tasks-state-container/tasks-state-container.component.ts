import { Component, Input, OnInit } from '@angular/core';
import { TaskStateModel } from 'src/app/shared/statistics/models/task-state-model';
import { TaskModel } from 'src/app/tasks/models/task-model';

@Component({
  selector: 'app-tasks-state-container',
  templateUrl: './tasks-state-container.component.html',
  styleUrls: ['./tasks-state-container.component.scss'],
})
export class TasksStateContainerComponent implements OnInit {
  @Input() taskState: TaskStateModel = {} as TaskStateModel;
  @Input() tasks: TaskModel[] = [];
  constructor() {}

  ngOnInit() {
    console.log(this.tasks)
  }
}
