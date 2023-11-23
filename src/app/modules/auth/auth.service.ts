import {Injectable} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

export enum EAuthPopUpState {
  CLOSED = 'closed',
  REGISTER = 'register',
  HELLO = 'hello',
  LOGIN = 'login',
  RESET_PASSWORD_START = 'reset_start',
  RESET_PASSWORD_CONTINUE = 'reset_continue',
}

export type TAuthScreenParams = { auth: string };

export type TResetPasswordContinueParams = TAuthScreenParams & { "reset-id"?: string };

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private authPopupState = EAuthPopUpState.CLOSED;

  public isOneOfAuthFormIsInvalid: boolean = false;

  constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute, private readonly _notifierService: NotifierService) {}

  public get authPopUpState() {
    return this.authPopupState;
  }

  public setAuthPopUpState(state: EAuthPopUpState) {
    let _state: EAuthPopUpState | null = state;
    this.isOneOfAuthFormIsInvalid = false;

    if (_state === EAuthPopUpState.CLOSED) {
      _state = null;
    }

    this._router.navigate(
      [],
      {
        relativeTo: this._activatedRoute,
        queryParams: {
          auth: _state
        },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      }
    );
    this.authPopupState = state;
  }

  public checkResetPasswordContinuePage(params: TResetPasswordContinueParams): boolean {
    if (!params['reset-id'] || !params['reset-id'].length) {
      const notificationId = "RESET_PASSWORD_NOTIFICATION";

      this._notifierService.hide(notificationId);
      this._notifierService.notify("error", "Некорректная ссылка для восстановления пароля.", notificationId);
      this.setAuthPopUpState(EAuthPopUpState.CLOSED);

      return false;
    }

    return true;
  }

  public getAuthPopUpStateByQueryParam(qs: string): EAuthPopUpState {
    switch (qs) {
      case EAuthPopUpState.REGISTER: {
        return EAuthPopUpState.REGISTER;
      }

      case EAuthPopUpState.LOGIN: {
        return EAuthPopUpState.LOGIN;
      }

      case EAuthPopUpState.RESET_PASSWORD_START: {
        return EAuthPopUpState.RESET_PASSWORD_START;
      }

      case EAuthPopUpState.HELLO: {
      }
        return EAuthPopUpState.HELLO;

      case EAuthPopUpState.RESET_PASSWORD_CONTINUE: {
        return EAuthPopUpState.RESET_PASSWORD_CONTINUE;
      }

      default: {
        return EAuthPopUpState.CLOSED;
      }
    }
  }
}
