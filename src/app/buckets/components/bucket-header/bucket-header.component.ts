import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BucketService } from 'src/app/core/services/bucket.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { BucketinhomeModel } from '../../models/bucket-in-home-model';
import { EditBucketComponent } from '../edit-bucket/edit-bucket.component';

@Component({
  selector: 'app-bucket-header',
  templateUrl: './bucket-header.component.html',
  styleUrls: ['./bucket-header.component.scss']
})
export class BucketHeaderComponent {
  @Input() bucket: Observable<BucketinhomeModel> | undefined;
  constructor(private dialogservice: DialogService,
    private dialog: MatDialog) { }

  // onEditBucket() {    
  //   const dialogOpen = this.dialog.open(EditBucketComponent,
  //     {        
  //         width: '660px'
  //     });
  // }




  // ngOnInit() {
  //   this.router.params.subscribe((res: any) => {
  //     console.log(res.id);
  //     const bucketId: number = +res.id;
  //     this.bucket = this.bucketservice.getBucketById(bucketId);   
  //     console.log(this.bucket);
  //  });
}

