import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BucketModel } from 'src/app/buckets/models/bucket-model';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.scss']
})
export class TaskListHeaderComponent implements OnInit, OnChanges {
  tasksbrowser = 'Browse your tasks:';
  @Output() addTask = new EventEmitter<void>();
  @Input() bucketModel: BucketModel | undefined;
  showTooltip = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bucketModel']) {
      this.updateTooltip();
    }
  }

  onAddBucket() {
    if (!this.isButtonDisabled) {
      this.addTask.emit();
    }
  }

  // Ulepszona metoda do aktualizacji stanu tooltipa
  updateTooltip() {
    if (this.bucketModel) {
      const currentTaskCount = this.bucketModel.tasks?.length || 0;
      const maxTaskCount = this.bucketModel.maxNumberOfTasks || Infinity;
      this.showTooltip = currentTaskCount >= maxTaskCount;
    }
  }

  // Getter do sprawdzania, czy przycisk jest nieaktywny
  get isButtonDisabled(): boolean {
    return this.showTooltip;
  }
}
