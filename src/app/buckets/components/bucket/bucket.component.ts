import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BucketinhomeModel } from '../../models/bucket-in-home-model';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-Bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent {
  @Output() onDeleteBucket: EventEmitter<BucketinhomeModel> =
    new EventEmitter();
  @Input() bucket: BucketinhomeModel = {} as BucketinhomeModel;
  constructor(private dialogService: DialogService) {}

  onDelete() {
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
