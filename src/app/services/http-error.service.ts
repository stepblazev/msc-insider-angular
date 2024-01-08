import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService implements ErrorHandler {
  constructor(private readonly _notifierService: NotifierService) {}

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status == 429) {
        this._notifierService.notify('error', 'Слишком много запросов');
      }
    }
  }
}
