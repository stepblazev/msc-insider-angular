import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IOption<T> {
  label: string;
  value: T;
}

@Component({
  standalone: true,
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [CommonModule],
})
export class SelectComponent {
  public isOptionsOpened: boolean = false;

  @Input() options: IOption<any>[];
  @Input() current: IOption<any>;

  @Output() valueChanged = new EventEmitter<IOption<any>>();

  constructor(private elRef: ElementRef) {}

  setOption(option: IOption<any>) {
    if (option == this.current) return;
    this.current = option;
    this.valueChanged.emit(option);
    this.setIsOptionsOpened(false);
  }

  setIsOptionsOpened(state: boolean) {
    this.isOptionsOpened = state;
  }

  @HostListener('body:click', ['$event'])
  handleClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.setIsOptionsOpened(false);
    }
  }
}
