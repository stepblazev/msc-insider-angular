import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('popupState', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateY(-40px)' })),
      transition('visible => hidden', animate('300ms ease')),
      transition('hidden => visible', animate('300ms ease')),
    ]),
    trigger('backdropState', [
      state('visible', style({ backdropFilter: 'blur(4px)', opacity: 1 })),
      state('hidden', style({ backdropFilter: 'blur(0px)', opacity: 0 })),
      transition('visible => hidden', animate('300ms ease')),
      transition('hidden => visible', animate('300ms ease')),
    ]),
  ],
})
export class PopupComponent implements OnInit {
  @Input() isOpened: boolean = false;
  @Output() closeModalEvent = new EventEmitter();

  constructor() {}

  public closeModal() {
    this.isOpened = false;
    this.closeModalEvent.emit();
  }

  ngOnInit(): void {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' && this.isOpened) {
        this.closeModal();
      }
    });
  }
}
