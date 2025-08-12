import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent, Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) tasks: Task[] = [];
  @Output() toggleTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();

  onToggleTask(task: Task) {
    this.toggleTask.emit(task);
  }

  onDeleteTask(id: number) {
    this.deleteTask.emit(id);
  }
}
