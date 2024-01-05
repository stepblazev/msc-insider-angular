import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { UserService } from '../../../modules/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(
    private readonly _router: Router,
    private readonly _userService: UserService
  ) {
    window.scrollTo({ top: 0 });
  }

  public get activeTariffName(): string {
    return this._userService.currentUser?.role.getValue().name as string;
  }

  public get activeTariffType(): string {
    return this._userService.currentUser?.role.getValue().slug as string;
  }

  public isActive(path: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };

    return this._router.isActive(path, options);
  }
}
