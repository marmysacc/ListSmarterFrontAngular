import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BucketModel } from '../models/bucket-model';
import { BucketinhomeModel } from '../models/bucketinhome-model';


@Component({
  selector: 'app-Bucket-list',
  templateUrl: './Bucket-list.component.html',
  styleUrls: ['./Bucket-list.component.css'],
})
export class BucketListComponent implements OnInit {
  constructor(
    private http: HttpClient,
    ) {}
  bucketbrowser = 'Browse your buckets:'
  buckets: BucketinhomeModel[] = [];
  buckets1: BucketModel[] = [];

  ngOnInit(): void {
    this.getBuckets();
  }
  getBuckets() {
    this.http
      .get<BucketModel[]>(
        // `${api}/stats`
        'https://localhost:5001/api/Statistics/Bucket'
      )
      .subscribe((buckets) => {
        console.log('Bucket from backend', buckets);
        this.buckets = buckets;
      });
  }

  deleteBucket(bucket: BucketinhomeModel) {
    this.http
      .delete(`https://localhost:44340/api/Bucket/${bucket.id}`)
      .subscribe(
        () => (this.buckets = this.buckets.filter((e) => e !== bucket))
      );
  }



  maxBuckets(){
    if(this.buckets?.length===6)
    return true;
    else
    return false;
  }

  onAddBucket() {
    if (this.buckets.length >= 10) {
      // popup
      return;
    }
    // popup
  }
}
