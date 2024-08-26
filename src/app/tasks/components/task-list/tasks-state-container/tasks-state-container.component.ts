import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { TaskStateModel } from 'src/app/shared/statistics/models/task-state-model';
import { TaskModel } from 'src/app/tasks/models/task-model';
import { TaskStateEnum } from '../task-state.enum';

@Component({
  selector: 'app-tasks-state-container',
  templateUrl: './tasks-state-container.component.html',
  styleUrls: ['./tasks-state-container.component.scss'],
})
export class TasksStateContainerComponent implements OnInit, OnChanges {
  @Input() taskState: TaskStateModel = {} as TaskStateModel;
  @Input() tasks: TaskModel[] = [];
  @Output() tasksChanged = new EventEmitter<TaskModel[]>();
  @Input() connectedDropLists: string[] = []; // Dodaj ten input

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.sortTasks();
  }

  sortTasks() {
    this.tasks.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return a.title.localeCompare(b.title);
    });
  }

  handleTaskChange(updatedTask: TaskModel) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasks = [...this.tasks];
      this.tasksChanged.emit(this.tasks);
    }
  }

  mapStateNameToEnum(stateName?: string): number {
    switch (stateName) {
      case 'To do:':
        return TaskStateEnum.Todo;
      case 'In progress:':
        return TaskStateEnum.InProgress;
      case 'Done:':
        return TaskStateEnum.Done;
      case 'Cancelled:':
        return TaskStateEnum.Cancelled;
      default:
        return -1;
    }
  }

  // drop(event: CdkDragDrop<TaskModel[]>) {
  //   console.log('Test', event);

  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     const movedTask = event.previousContainer.data[event.previousIndex];
  //     const newState = this.mapStateNameToEnum(this.taskState.name); // Mapa nowego stanu

  //     if (newState !== -1) {
  //       movedTask.state = newState; // Ustaw nowy stan

  //       this.taskService.editTask(movedTask).subscribe((updatedTask) => {
  //         console.log('Zadanie zaktualizowane:', updatedTask);
  //         transferArrayItem(
  //           event.previousContainer.data,
  //           event.container.data,
  //           event.previousIndex,
  //           event.currentIndex
  //         );
  //         this.handleTaskChange(updatedTask);
  //       });
  //     }
  //   }
  // }

  drop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      // Jeśli przeciągasz w tym samym kontenerze, po prostu zmień kolejność
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Usuń element z poprzedniego kontenera natychmiast po rozpoczęciu przeciągania
      const movedTask = event.previousContainer.data.splice(event.previousIndex, 1)[0];
      const newState = this.mapStateNameToEnum(this.taskState.name);

      if (newState !== -1) {
        movedTask.state = newState;

        // Zaktualizuj zadanie na serwerze i przenieś do nowego kontenera
        this.taskService.editTask(movedTask).subscribe((updatedTask) => {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
          );
          this.handleTaskChange(updatedTask);
        });
      }
    }
  }

}
