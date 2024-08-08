import { Component, Inject, Input } from '@angular/core';
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

@Component({
  selector: 'app-edit-bucket',
  templateUrl: './edit-bucket.component.html',
  styleUrls: ['./edit-bucket.component.scss'],
})
export class EditBucketComponent {
  @Input() bucket: Observable<BucketinhomeModel> | undefined;
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditBucketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      id: [this.data],
      name: ['', Validators.required],
      description: [''],
      color: ['#964b00', Validators.required],
      maxNumberOfTasks: ['15', Validators.required],
    });
    //console.log('closeDialog',this.data);
    //this.profileForm.patchValue()
  }

  closeDialog() {
    //console.log('closeDialog',this.data);
    this.dialogRef.close(false);
  }
}
