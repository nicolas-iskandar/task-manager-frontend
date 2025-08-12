import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks';
import { Task, TaskDTO } from './tasks/task/task';
import { InputComponent } from './input/input';
import { TaskService } from './tasks/task/task.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TasksComponent, InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => (this.tasks = tasks),
      error: (err) => console.error('Failed to load tasks', err),
    });
  }

  onSubmit(description: string) {
    const newTask: TaskDTO = {
      description,
      completed: false,
    };

    this.taskService.addTask(newTask).subscribe({
      next: (task) => this.tasks.push(task),
      error: (err) => console.error('Failed to add task', err),
    });
  }

  onToggleTask(task: Task) {
    this.taskService.updateTask(task).subscribe({
      next: (updatedTask) => {
        this.tasks = this.tasks.map((t) =>
          t.id === updatedTask.id ? updatedTask : t
        );
      },
      error: (err) => console.error('Failed to update task', err),
    });
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((t) => t.id !== id);
      },
      error: (err) => console.error('Failed to delete task', err),
    });
  }
}
