import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  profileForm: FormGroup;
  priorityLevels: number[] = [1, 2, 3];
  states: number[] = [1, 2, 3, 4];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.profileForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: [1, Validators.required ],
      state: [1, Validators.required],
      bucketId: [data, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("data",  this.data);
    //console.log("bucket", this.bucketModel);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
