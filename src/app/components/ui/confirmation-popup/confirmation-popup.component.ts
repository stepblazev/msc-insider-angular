import { Component } from '@angular/core';
import { ConfirmationPopupService } from 'src/app/services/confirmation-popup.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  standalone: true,
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
  imports: [PopupComponent],
})
export class ConfirmationPopupComponent {
  constructor(public confirmationPopupService: ConfirmationPopupService) {}

  confirm(answer: boolean): void {
    this.confirmationPopupService.respond(answer);
  }
}
