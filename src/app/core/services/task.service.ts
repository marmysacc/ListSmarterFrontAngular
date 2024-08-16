import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from 'src/app/tasks/models/task-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url: string = environment.baseUrlApi;
  constructor(private http: HttpClient) {}

  getTasksbyBucketId(bucketId: number): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(
      `${this.url}/TaskJob/ByBucketId/${bucketId}`
    );
  }
}
