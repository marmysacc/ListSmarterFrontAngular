import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskStateModel } from '../shared/statistics/models/task-state-model';
import { StatisticsService } from '../core/services/statistics.service';
import { BucketService } from '../core/services/bucket.service';
import { BucketinhomeModel } from '../buckets/models/bucket-in-home-model';
import { DialogService } from '../core/services/dialog.service';
import { EditBucketComponent } from '../buckets/components/edit-bucket/edit-bucket.component';
import { MatDialog } from '@angular/material/dialog';
import { EditBucketModel } from '../buckets/models/edit-bucket-model';

@Component({
  selector: 'app-single-bucket-page',
  templateUrl: './single-bucket-page.component.html',
  styleUrls: ['./single-bucket-page.component.scss'],
})
export class SinglebucketComponent implements OnInit {
  welcome = 'Welcome in ListSmarter';
  statistics: Observable<TaskStateModel[]> | undefined;
  bucket: Observable<BucketinhomeModel> | undefined;
  onDeleteBucket: EventEmitter<BucketinhomeModel> = new EventEmitter();
  id: Number = {} as Number;
  backgroundColor: string;
  constructor(
    private statisticsservice: StatisticsService,
    private bucketservice: BucketService,
    private router: ActivatedRoute,
    private routing: Router,
    private dialogservice: DialogService,
    private dialog: MatDialog
  ) {
    const navigation = this.routing.getCurrentNavigation();
    this.backgroundColor = navigation?.extras.state?.['backgroundColor'] || 'defaultColor';
  }

  ngOnInit(): void {
    this.readBucket();
    console.log("color", this.backgroundColor)
  }

  readBucket(){
    this.router.params.subscribe((res: any) => {
      console.log(res.id);
      const bucketId: number = +res.id;
      this.statistics = this.statisticsservice.getStatisticByBucket(bucketId);
      this.bucket = this.bucketservice.getBucketById(bucketId);
      console.log(this.bucket);
      this.id=bucketId;
    });
  }

  onEditBucket() {
    const dialogOpen = this.dialog.open(EditBucketComponent, {
      width: '660px',
      data: this.id,
    });
    dialogOpen.afterClosed().subscribe((result: EditBucketModel) => {
      console.log('afterClosed', result);
      if(result){
        console.log("dsd", result);
        this.bucketservice.editBucket(result).subscribe(()=>this.readBucket());
      }
    })
  }

  // onDelete() {
  //   this.dialogservice
  //     .openConfirmDialog(`Are you sure to delete bucket ${this.bucket} with all tasks?`)
  //     .afterClosed()
  //     .subscribe((res) => {
  //       if (res) {
  //         this.onDeleteBucket.emit(this.bucket);
  //       }
  //     });
  // }

  // deleteBucket(bucket: BucketinhomeModel) {
  //   this.bucketservice
  //     .deleteBucket(bucket)
  //     .subscribe();
  // }
}
