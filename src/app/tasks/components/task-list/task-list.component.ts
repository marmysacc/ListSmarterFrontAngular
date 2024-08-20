import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStateModel } from 'src/app/shared/statistics/models/task-state-model';
import { TaskModel } from '../../models/task-model';
import { TaskService } from 'src/app/core/services/task.service';
import { HttpClient } from '@angular/common/http';
import { AddTaskModel } from '../../models/add-task-model';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { BucketModel } from 'src/app/models/bucket-model';
import { TaskStateEnum } from './task-state.enum';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() taskState: Observable<TaskStateModel[]> | undefined;
  @Input() bucketId: number = 0;
  @Input() bucketModel: BucketModel | undefined;
  taskForBucket: TaskModel[] = [];
  state: any;
  constructor(
    private http: HttpClient,
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getTasksForBucket();
  }

  getTasksForBucket() {
    this.taskService.getTasksbyBucketId(this.bucketId).subscribe((tasks) => {
      this.taskForBucket = tasks;
    });

  }

  getTasksByState(taskState?: string): TaskModel[] {
    const stateEnumValue = this.mapStateNameToEnum(taskState);
    return this.taskForBucket.filter((task) => task.state == stateEnumValue);
  }

  mapStateNameToEnum(stateName?: string): number {
    switch (stateName) {
      case 'To do:':
        return TaskStateEnum.Todo;
      case 'In progress:':
        return TaskStateEnum.InProgress;
      case 'Done:':
        return TaskStateEnum.Done;
      case 'Cancelled:':
        return TaskStateEnum.Cancelled;
      default:
        return -1;
    }
  }

  onAddTask() {
    const dialogOpen = this.dialog.open(AddTaskComponent, {
      width: '660px',
      data: this.bucketId,
    });
    dialogOpen.afterClosed().subscribe((result: AddTaskModel) => {
      if (result) {
        this.taskService
          .addTask(result)
          .subscribe(() => this.getTasksForBucket());
      }
    });
  }
}
