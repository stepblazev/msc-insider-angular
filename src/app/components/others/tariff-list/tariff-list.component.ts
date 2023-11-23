import { Component } from '@angular/core';
import { TariffItemComponent } from '../tariff-item/tariff-item.component';
import { ITariff, tariffs } from 'src/app/temp';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  imports: [TariffItemComponent, CommonModule],
})
export class TariffListComponent {
  public tariffs: ITariff[] = tariffs;
}
