import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputComponent {
  @Output() onSubmitEvent = new EventEmitter<string>();
  description = '';

  onSubmit() {
    this.onSubmitEvent.emit(this.description.trim());
    this.description = '';
  }
}
