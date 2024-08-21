import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
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
  @Output() tasksChanged = new EventEmitter<TaskModel[]>();

  constructor(private taskService: TaskService) {}

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

  handleTaskChange(updatedTask: TaskModel) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasks = [...this.tasks];
      this.tasksChanged.emit(this.tasks);
    }
  }
}
