import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BucketService } from 'src/app/core/services/bucket.service';
import { MatDialog} from '@angular/material/dialog';
import { AddBucketComponent } from '../add-bucket/add-bucket.component';
import { AddBucketModel } from '../../models/addbucket-model';
import { BucketModel } from '../../models/bucket-model';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss'],
})
export class BucketListComponent implements OnInit {
  bucketbrowser = 'Browse your buckets:';
  buckets: BucketModel[] = [];
  maxbuckets = 10;
  constructor(
    private http: HttpClient,
    private bucketservice: BucketService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getBuckets();
  }

  getBuckets() {
    this.bucketservice.getBuckets().subscribe((buckets) => {
      this.buckets = buckets;
    });
  }

  deleteBucket(bucket: BucketModel) {
    this.bucketservice
      .deleteBucket(bucket)
      .subscribe(
        () => (this.buckets = this.buckets.filter((e) => e !== bucket))
      );
  }

  maxBuckets() {
    if (this.buckets?.length === this.maxbuckets) return true;
    return false;
  }

  onAddBucket() {
    const dialogOpen = this.dialog.open(AddBucketComponent,
      {
          width: '660px'
      });
    dialogOpen.afterClosed().subscribe((result) => {
      if(result){
        this.bucketservice.addBucket(result).subscribe(()=>this.getBuckets());
      }
    })
  }
}
