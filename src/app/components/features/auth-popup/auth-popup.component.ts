import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  AuthService,
  EAuthPopUpState,
  TResetPasswordContinueParams,
} from '../../../modules/auth/auth.service';
import { UserService } from '../../../modules/user/user.service';
import * as qs from 'qs';
import { ELoadingStatus } from '../../../core/loading-status';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss'],
})
export class AuthPopupComponent {
  protected readonly EAuthPopUpState = EAuthPopUpState;

  constructor(
    public readonly authService: AuthService,
    public readonly userService: UserService,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    this.document.addEventListener('keydown', (event) => {
      const isNotCombinedKey = !(
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      );

      if (event.key === 'Escape' && isNotCombinedKey) {
        this.closePopUp();
      }
    });

    _router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const parsedQuery = qs.parse(_router.url.split('?')[1]);

        if ('auth' in parsedQuery) {
          if (
            parsedQuery['auth'] === EAuthPopUpState.HELLO &&
            !userService.isAuthorized
          ) {
            return;
          }

          if (parsedQuery['auth'] === EAuthPopUpState.RESET_PASSWORD_CONTINUE) {
            const result = this.authService.checkResetPasswordContinuePage(
              parsedQuery as TResetPasswordContinueParams
            );
            if (!result) {
              return;
            }
          }

          this.authService.setAuthPopUpState(
            this.authService.getAuthPopUpStateByQueryParam(
              parsedQuery['auth'] as string
            )
          );
        }
      }
    });
  }

  public get isNotResetPassword(): boolean {
    return (
      this.authService.authPopUpState !==
        EAuthPopUpState.RESET_PASSWORD_START &&
      this.authService.authPopUpState !==
        EAuthPopUpState.RESET_PASSWORD_CONTINUE
    );
  }

  public get canShownAuthPopup(): boolean {
    if (this.userService.loadingStatus === ELoadingStatus.INITIAL_LOADING) {
      return false;
    }

    if (
      this.authService.authPopUpState === EAuthPopUpState.HELLO &&
      this.userService.isAuthorized
    ) {
      return true;
    }

    if (this.userService.isAuthorized) {
      return false;
    }

    return this.authService.authPopUpState !== EAuthPopUpState.CLOSED;
  }

  public goToLoginPage() {
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: {
        auth: EAuthPopUpState.LOGIN,
      },
      queryParamsHandling: 'merge',
    });
  }

  public closePopUp() {
    this.authService.setAuthPopUpState(EAuthPopUpState.CLOSED);
  }
}
