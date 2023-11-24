import { Component } from '@angular/core';
import {
  AuthService,
  EAuthPopUpState,
} from '../../../../modules/auth/auth.service';
import { UserService } from '../../../../modules/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss'],
})
export class UserBarComponent {
  protected readonly EAuthPopUpState = EAuthPopUpState;

  constructor(
    private readonly _router: Router,
    public readonly authService: AuthService,
    public readonly userService: UserService
  ) {}

  public isActiveRoute(): boolean {
    return this._router.url.includes('profile');
  }

  public get userName(): string {
    let name = this.userService.currentUser?.name;

    if (!name) {
      return 'Пользователь';
    }

    return name;
  }

  public get userRole(): string {
    return this.userService.currentUser?.role.getValue().name as string;
  }

  public handleLogout() {
    this.userService.logout();
    this.authService.setAuthPopUpState(EAuthPopUpState.CLOSED);
    this._router.navigate([`/`]);
  }

  public handleAuthPopUpToggle() {
    let state = EAuthPopUpState.LOGIN;
    if (this.authService.authPopUpState !== EAuthPopUpState.CLOSED) {
      state = EAuthPopUpState.CLOSED;
    }

    this.authService.setAuthPopUpState(state);
  }
}
