import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports: [CommonModule],
})
export class CheckboxComponent {
  @Input() inputId: string = 'app-checkbox';
  @Input() label: string = 'Без названия';
  @Input() checked: boolean = false;

  @Output() valueChanged = new EventEmitter<boolean>();

  constructor() {}

  update(value: boolean) {
    this.checked = value;
    this.valueChanged.emit(value);
  }
}
