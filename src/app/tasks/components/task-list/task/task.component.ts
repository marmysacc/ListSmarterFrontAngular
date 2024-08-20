import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/tasks/models/task-model';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel = {} as TaskModel;
  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  changeState() {
    this.task.state = this.task.state + 1;
    this.taskService
      .editTask(this.task)
      .subscribe((task) => (this.task = task));
  }
}
