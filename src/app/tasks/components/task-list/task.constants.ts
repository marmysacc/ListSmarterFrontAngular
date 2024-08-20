import { TaskPriorityEnum } from "./task-priority.enum";
import { TaskStateEnum } from "./task-state.enum";

export const TASK_STATE_OPTIONS = [
  { value: TaskStateEnum.Todo, label: 'To do', icon: 'fa-solid fa-hourglass-start' },
  { value: TaskStateEnum.InProgress, label: 'In Progress', icon: 'fa-solid fa-spinner' },
  { value: TaskStateEnum.Done, label: 'Done', icon: 'fa-solid fa-check' },
  { value: TaskStateEnum.Cancelled, label: 'Cancelled', icon: 'fa-solid fa-ban' }
];

export const TASK_PRIORITY_OPTIONS = [
  { value: TaskPriorityEnum.High, label: 'High', icon: 'fa-solid fa-circle-up' },
  { value: TaskPriorityEnum.Medium, label: 'Medium', icon: 'fa-solid fa-circle-left' },
  { value: TaskPriorityEnum.Low, label: 'Low', icon: 'fa-solid fa-circle-down' }
];
