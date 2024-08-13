import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bucket',
  templateUrl: './add-bucket.component.html',
  styleUrls: ['./add-bucket.component.scss'],
})
export class AddBucketComponent {
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddBucketComponent>
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      color: ['#964b00', Validators.required],
      maxNumberOfTasks: ['15', Validators.required],
    });
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
