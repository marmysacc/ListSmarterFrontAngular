import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/tasks/models/task-model';
import { TaskService } from '../../../../core/services/task.service';
import { EditTaskComponent } from '../../edit-task/edit-task.component';
import { EditTaskModel } from 'src/app/tasks/models/edit-task-model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel = {} as TaskModel;
  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit() {}

  changeState() {
    this.task.state = this.task.state + 1;
    this.taskService
      .editTask(this.task)
      .subscribe((task) => (this.task = task));
  }

  onEditTask() {
    const dialogOpen = this.dialog.open(EditTaskComponent, {
      width: '660px',
      data: this.task,
    });
    dialogOpen.afterClosed().subscribe((result: EditTaskModel) => {
      if (result) {
        this.taskService
          .editTask(result)
          .subscribe(() => this.taskService.getTaskById(this.task.id));
      }
    });
  }
}
