import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bucket-list-header',
  templateUrl: './bucket-list-header.component.html',
  styleUrls: ['./bucket-list-header.component.scss']
})
export class BucketListHeaderComponent {

  @Input() bucketbrowser: string = '';
  @Input() maxBuckets: boolean = false;
  @Output() addBucket = new EventEmitter<void>();

  onAddBucket() {
    this.addBucket.emit();
  }

}
