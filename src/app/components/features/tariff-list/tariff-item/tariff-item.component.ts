import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from 'src/app/shared/utils/format-date';
import { ITariff } from 'src/app/modules/subscription/models/tariff';
import { UserService } from 'src/app/modules/user/user.service';
import { ITariffTheme, TariffThemes } from './tariff-theme';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss'],
})
export class TariffItemComponent implements OnInit {
  @Input() tariff: ITariff;

  public isCurrent: boolean = false;
  public showHoverDescription: boolean = false;

  public tariffTheme: ITariffTheme;

  constructor(public readonly _userService: UserService) {}

  ngOnInit(): void {
    this.tariffTheme = TariffThemes[this.tariff.id];
    this.isCurrent =
      this.tariff.role_id == this._userService.currentUser?.role.getValue().id;
  }

  formatDate(date: Date, template: string): string {
    return formatDate(date, template);
  }
}
