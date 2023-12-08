import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class DateInputComponent {
  @ViewChild('input') inputElement: ElementRef;

  @Input() label: string = 'ДД.ММ.ГГГ';
  @Output() valueChanged = new EventEmitter();

  public value: string = '';

  numberOnly(event: any): void {
    const inputChar: string = String.fromCharCode(event.charCode);
    const pattern: RegExp = /^\d+$/;
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onInputChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    const inputValue: string = element.value.replace(/\D/g, '');
    let formattedValue: string = '';

    for (let i = 0; i < inputValue.length && i < 8; i++) {
      if (i === 2 || i === 4) {
        formattedValue += '.';
      }
      formattedValue += inputValue[i];
    }

    this.value = formattedValue;
    this.valueChanged.emit(formattedValue);
  }
}
