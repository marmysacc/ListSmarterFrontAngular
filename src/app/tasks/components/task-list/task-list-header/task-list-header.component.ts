import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BucketModel } from 'src/app/buckets/models/bucket-model';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss']
})
export class TaskListHeaderComponent implements OnInit {
  tasksbrowser = 'Browse your tasks:';
  @Output() addTask = new EventEmitter<void>();
  @Input() bucketModel: BucketModel | undefined;
  showTooltip = false;

  constructor() { }

  ngOnInit() {
    this.checkTaskLimit();
  }

  onAddBucket() {
    this.addTask.emit();
    this.checkTaskLimit();
  }


  checkTaskLimit() {
    if (this.bucketModel) {
      const currentTaskCount = this.bucketModel.tasks?.length || 0;
      const maxTaskCount = this.bucketModel.maxNumberOfTasks || Infinity;
      this.showTooltip = currentTaskCount >= maxTaskCount;
    }
  }

}
