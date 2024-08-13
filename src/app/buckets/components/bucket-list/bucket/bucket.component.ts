import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DialogService } from '../../../../core/services/dialog.service';
import { BucketModel } from '../../../models/bucket-model';

@Component({
  selector: 'app-Bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent implements OnInit {
  @Output() onDeleteBucket: EventEmitter<BucketModel> =
    new EventEmitter();
  @Input() bucket: BucketModel = {} as BucketModel;
  toDo: number = 0;
  constructor(private dialogService: DialogService) {}

  ngOnInit(){
    if (this.bucket.tasks) {
      const tasksWithStateOne = this.bucket.tasks.filter(task => task.state === 1);
      this.toDo = tasksWithStateOne.length;
    }
  }

  onDelete(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dialogService
      .openConfirmDialog(`Are you sure to delete bucket ${this.bucket.name} with all tasks?`)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.onDeleteBucket.emit(this.bucket);
        }
      });
  }
}
