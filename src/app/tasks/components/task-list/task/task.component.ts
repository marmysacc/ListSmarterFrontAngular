import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/tasks/models/task-model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
@Input() task: TaskModel = {} as TaskModel
  constructor() { }

  ngOnInit() {
  }

  changeState(){
    this.task.state = this.task.state + 1;
  }
  
}
