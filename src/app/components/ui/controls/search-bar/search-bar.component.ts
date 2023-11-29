import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class SearchBarComponent {
  @Input() value: string = '';
  @Input() possibleValues: string[] = [];

  public isValuesOpened: boolean = false;

  constructor(public elRef: ElementRef) {}

  setValue(value: string) {
    this.value = value;
    this.isValuesOpened = false;
  }

  @HostListener('body:click', ['$event'])
  handleClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isValuesOpened = false;
    }
  }
}
