import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TASK_PRIORITY_OPTIONS, TASK_STATE_OPTIONS } from '../task-list/task.constants';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  profileForm: FormGroup;
  priorityLevels = TASK_PRIORITY_OPTIONS;
  states = TASK_STATE_OPTIONS;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.profileForm = this.fb.group({
      id: [data.id, Validators.required],
      title: [data.title, Validators.required],
      description: [data.description],
      priority: [data.priority, Validators.required ],
      state: [data.state, Validators.required],
      bucketId: [data.bucketId, Validators.required],
    });
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
