import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTaskModel } from 'src/app/tasks/models/add-task-model';
import { EditTaskModel } from 'src/app/tasks/models/edit-task-model';
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

  getTaskById(taskId: number): Observable<TaskModel>{
    return this.http .get<TaskModel>(`${this.url}/TaskJob/${taskId}`)
  }

  addTask(addTask: AddTaskModel):Observable<TaskModel>{
    return this.http.post<TaskModel>(`${this.url}/TaskJob`, addTask);
  }

  editTask(editTask: EditTaskModel): Observable<TaskModel>{
    return this.http .put<TaskModel>(`${this.url}/TaskJob`, editTask);
  }

  deleteTask(task: TaskModel) {
    return this.http .delete(`${this.url}/TaskJob/${task.id}`);
};
}
