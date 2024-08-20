import { Component, Input, OnChanges } from '@angular/core';
import { TaskStateModel } from 'src/app/shared/statistics/models/task-state-model';
import { TaskModel } from 'src/app/tasks/models/task-model';

@Component({
  selector: 'app-tasks-state-container',
  templateUrl: './tasks-state-container.component.html',
  styleUrls: ['./tasks-state-container.component.scss'],
})
export class TasksStateContainerComponent implements OnChanges {
  @Input() taskState: TaskStateModel = {} as TaskStateModel;
  @Input() tasks: TaskModel[] = [];
  constructor() {}

  ngOnChanges(){
    this.sortTasks();
  }

  sortTasks() {
    this.tasks.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return a.title.localeCompare(b.title);
    });
  }
}
