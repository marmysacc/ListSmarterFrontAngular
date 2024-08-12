import { TaskModel } from "src/app/tasks/models/task-model";

export interface BucketModel {
  id: number;
  name: string;
  description?: string;
  color?: string;
  maxNumberofTasks?: number;
  tasks?: TaskModel[];
}
