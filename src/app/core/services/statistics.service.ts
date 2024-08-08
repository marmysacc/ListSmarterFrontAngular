import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskStateModel } from '../../shared/statistics/models/task-state-model';
import { statisticsallModel } from '../../shared/statistics/models/statistics-all-model';

@Injectable()
export class StatisticsService {
  private url: string = environment.baseUrlApi;
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<TaskStateModel[]> {
    return this.http.get<statisticsallModel>(`${this.url}/Statistics`).pipe(
      map((item) => {
        return [
          { name: 'To do:', color: 'yellow', amount: item.ToDo },
          { name: 'In progress:', color: '#008dff', amount: item.InProgress },
          { name: 'Done:', color: 'green', amount: item.Done },
          { name: 'Cancelled:', color: 'red', amount: item.Cancelled },
        ];
      })
    );
  }

  getStatisticByBucket(bucketId: number): Observable<TaskStateModel[]> {
    return this.http
      .get<statisticsallModel>(`${this.url}/Statistics/${bucketId}`)
      .pipe(
        map((item) => {
          return [
            { name: 'To do:', color: 'yellow', amount: item.ToDo },
            { name: 'In progress:', color: '#008dff', amount: item.InProgress },
            { name: 'Done:', color: 'green', amount: item.Done },
            { name: 'Cancelled:', color: 'red', amount: item.Cancelled },
          ];
        })
      );
  }
}
