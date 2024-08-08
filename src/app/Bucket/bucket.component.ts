import { Component, OnInit, Output, Input } from '@angular/core';
import * as EventEmitter from 'events';
import { BucketModel } from '../models/bucket-model';
import { BucketinhomeModel } from '../models/bucketinhome-model';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-Bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})

export class BucketComponent implements OnInit {

  @Output('onDeleteBucket') onDeleteBucket : EventEmitter<BucketinhomeModel> = new EventEmitter();
  @Input('bucket') bucket: BucketinhomeModel = {} as BucketinhomeModel;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  onDelete(){
    this.dialogService.openConfirmDialog('Are you sure to delete this bucket?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.onDeleteBucket.emit(this.bucket);
      }
    });
  }
}
