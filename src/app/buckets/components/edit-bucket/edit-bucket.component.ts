import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NumberValueAccessor,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { BucketinhomeModel } from '../../models/bucket-in-home-model';
import { BucketModel } from '../../models/bucket-model';

@Component({
  selector: 'app-edit-bucket',
  templateUrl: './edit-bucket.component.html',
  styleUrls: ['./edit-bucket.component.scss'],
})
export class EditBucketComponent {
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditBucketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      id: [this.data.id],
      name: [this.data.name, Validators.required],
      description: [this.data.description],
      color: [this.data.color, Validators.required],
      maxNumberOfTasks: [this.data.maxNumberOfTasks, Validators.required],
    });
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
