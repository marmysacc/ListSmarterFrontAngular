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
import { BucketModel } from '../models/bucket-model';
import { statisticModel } from '../models/statistic-model';

@Component({
  selector: 'app-single-bucket-page',
  templateUrl: './single-bucket-page.component.html',
  styleUrls: ['./single-bucket-page.component.scss'],
})
export class SinglebucketComponent implements OnInit {
  welcome = 'Welcome in ListSmarter';
  bucketModel: BucketModel | undefined;
  statisticModel: statisticModel | undefined;
  statistics: Observable<TaskStateModel[]> | undefined;
  bucket: Observable<BucketinhomeModel> | undefined;
  onDeleteBucket: EventEmitter<BucketinhomeModel> = new EventEmitter();
  id: number = {} as number;
  constructor(
    private statisticsservice: StatisticsService,
    private bucketservice: BucketService,
    private router: ActivatedRoute,
    private routing: Router,
    private dialogService: DialogService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getBucket();
  }

  getBucket(){
    this.router.params.subscribe((res: any) => {
      const bucketId: number = +res.id;
      this.bucketservice.getBucketById(bucketId).subscribe((bucket => {
        this.bucketModel = bucket;
      }));
      this.statistics = this.statisticsservice.getStatisticByBucket(bucketId);
      this.id=bucketId;
    });
  }

  onEditBucket() {
    const dialogOpen = this.dialog.open(EditBucketComponent, {
      width: '660px',
      data: this.bucketModel,
    });
    dialogOpen.afterClosed().subscribe((result) => {
      if(result){
        this.bucketservice.editBucket(result).subscribe(()=>this.getBucket());
      }
    })
  }

  onDelete() {
    this.dialogService
      .openConfirmDialog(`Are you sure to delete bucket ${this.bucketModel?.name} with all tasks?`)
      .afterClosed()
      .subscribe((res) => {
        if (res && this.bucketModel) {
          this.bucketservice.deleteBucket(this.bucketModel).subscribe(() => {
            this.routing.navigate(['/']);
          });
        }
      });
  }
}
