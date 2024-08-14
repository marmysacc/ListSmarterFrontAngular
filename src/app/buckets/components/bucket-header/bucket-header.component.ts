import { Component, Input } from '@angular/core';
import { BucketModel } from '../../models/bucket-model';

@Component({
  selector: 'app-bucket-header',
  templateUrl: './bucket-header.component.html',
  styleUrls: ['./bucket-header.component.scss']
})
export class BucketHeaderComponent {
  @Input() bucketModel: BucketModel | undefined;
}

