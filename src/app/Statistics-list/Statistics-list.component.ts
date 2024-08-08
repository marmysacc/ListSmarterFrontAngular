import { Component, OnInit } from '@angular/core';
import { statisticModel } from '../models/statistic-model';
import { HttpClient } from '@angular/common/http';
import { statisticsallModel } from '../models/statisticsall-model';
import { delay, map, Observable } from 'rxjs';

@Component({
  selector: 'app-Statistics-list',
  templateUrl: './Statistics-list.component.html',
  styleUrls: ['./Statistics-list.component.scss'],
})
export class StatisticsListComponent implements OnInit {
  constructor(private http: HttpClient) {}
  //statisticsall: statisticsallModel = {};
  statistics2: Observable<statisticModel[]> | undefined;

  ngOnInit(): void {
    this.getAllStatistics();
  }

  getAllStatistics() {
    this.statistics2 = this.http
      .get<statisticsallModel>('https://localhost:44340/api/Statistics')
      .pipe(
        map((item) => {
          return [
            { name: 'To do:', color: 'yellow', amount: item.ToDo },
            { name: 'In progress:', color: 'blue', amount: item.InProgress },
            { name: 'Done:', color: 'green', amount: item.Done },
            { name: 'Cancelled:', color: 'red', amount: item.Cancelled },
          ];
        })
      );
  }
}
