import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatisticsService } from '../core/services/statistics.service';
import { TaskStateModel } from '../shared/statistics/models/task-state-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomeComponent implements OnInit {
  welcome = 'Welcome in ListSmarter';
  constructor(private statisticsservice: StatisticsService) {}

  statistics: Observable<TaskStateModel[]> | undefined;
  ngOnInit(): void {
    this.statistics = this.statisticsservice.getStatistics();
  }
}
