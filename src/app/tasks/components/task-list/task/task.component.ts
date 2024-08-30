import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from 'src/app/tasks/models/task-model';
import { TaskService } from '../../../../core/services/task.service';
import { EditTaskComponent } from '../../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: TaskModel = {} as TaskModel;
  @Output() taskChanged = new EventEmitter<TaskModel>();
  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  changeState(event: MouseEvent) {
    event.stopPropagation();
    const updatedTask = Object.assign({}, this.task, { state: this.task.state + 1 });

    this.taskService.editTask(updatedTask).subscribe((task) => {
      console.log("przed eventem");
      this.taskChanged.emit(task);
      console.log("po evencie");
    });
  }

  onEditTask() {
    const dialogOpen = this.dialog.open(EditTaskComponent, {
      width: '660px',
      data: this.task,
    });

    dialogOpen.afterClosed().subscribe((result: TaskModel | boolean) => {
      if (typeof result === 'boolean') {
        if (result === true) {
          this.taskChanged.emit(this.task);
        }
      } else if (result) {
        this.taskService
          .editTask(result)
          .subscribe((task) => {
            this.taskChanged.emit(task);
          });
      }
    });
  }

}
