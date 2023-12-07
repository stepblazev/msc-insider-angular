import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ITabSelectOption<T> {
  label: string;
  value: T;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-tabs-select',
  templateUrl: './tabs-select.component.html',
  styleUrls: ['./tabs-select.component.scss'],
})
export class TabsSelectComponent {
  @Input() options: ITabSelectOption<any>[] = [];
  @Input() current: ITabSelectOption<any>;

  @Output() valueChanged = new EventEmitter();

  clickHandler(value: ITabSelectOption<any>) {
    this.current = value;
    this.valueChanged.emit(value);
  }
}
