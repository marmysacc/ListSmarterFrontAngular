import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletebucket',
  templateUrl: './deletebucket.component.html',
  styleUrls: ['./deletebucket.component.scss']
})
export class DeleteBucketComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DeleteBucketComponent>) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
