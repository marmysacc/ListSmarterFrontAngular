import { Component, Input } from '@angular/core';
import { TaskStateModel } from '../../models/task-state-model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent {
  @Input() statistic: TaskStateModel = {} as TaskStateModel;
}
