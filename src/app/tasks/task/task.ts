import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export interface TaskDTO {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() onToggleTaskOutput = new EventEmitter<Task>();
  @Output() onDeleteTaskOutput = new EventEmitter<number>();

  onToggleTask() {
    this.onToggleTaskOutput.emit(this.task);
  }

  onDeleteTask() {
    this.onDeleteTaskOutput.emit(this.task.id);
  }
}
