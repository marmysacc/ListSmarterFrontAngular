import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bucket',
  templateUrl: './add-bucket.component.html',
  styleUrls: ['./add-bucket.component.scss']
})
export class AddBucketComponent {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    color: ['#964b00', Validators.required],
    maxNumberOfTasks: ['15', Validators.required],
  });
  
  

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddBucketComponent>,
    ) {

      // this.profileForm.valueChanges.subscribe(value => {
      //   console.log('valueChanges',value.name);
      // })
    }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   //console.warn(this.profileForm.value);
  //   //this.bucket=this.profileForm.value;
  //   // this.addBucket(this.bucket);
  //   console.log("addBucket", this.profileForm)
  // }

  closeDialog() {
    this.dialogRef.close(false);
  }
  
  // addBucket(bucket: AddBucketModel){
  //   this.bucketservice.addBucket(bucket).subscribe();
  // }
}
