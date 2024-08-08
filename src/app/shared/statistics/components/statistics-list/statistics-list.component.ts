import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStateModel } from '../../models/task-state-model';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss'],
})
export class StatisticsListComponent {
  @Input() statistics: Observable<TaskStateModel[]> | undefined;
}
