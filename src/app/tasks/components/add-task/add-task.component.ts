import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TASK_PRIORITY_OPTIONS, TASK_STATE_OPTIONS } from '../task-list/task.constants';
import { TaskPriorityEnum } from '../task-list/task-priority.enum';
import { TaskStateEnum } from '../task-list/task-state.enum';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  profileForm: FormGroup;
  priorityLevels = TASK_PRIORITY_OPTIONS;
  states = TASK_STATE_OPTIONS;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.profileForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: [TaskPriorityEnum.High, Validators.required ],
      state: [TaskStateEnum.Todo, Validators.required],
      bucketId: [data, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("data",  this.data);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
