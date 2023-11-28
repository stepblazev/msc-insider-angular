import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IConfirm {
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmationPopupService {
  public confirmationSubject = new Subject<boolean>();

  public confirmData: IConfirm = { title: '', message: '' };
  public isConfirmOpened: boolean = false;

  confirm(payload: IConfirm): Observable<boolean> {
    this.confirmData = payload;
    this.openConfirm();
    this.confirmationSubject = new Subject<boolean>();
    return this.confirmationSubject.asObservable();
  }

  respond(answer: boolean): void {
    this.closeConfirm();
    this.confirmationSubject.next(answer);
    this.confirmationSubject.complete();
  }

  openConfirm() {
    this.isConfirmOpened = true;
  }

  closeConfirm() {
    this.isConfirmOpened = false;
  }
}
