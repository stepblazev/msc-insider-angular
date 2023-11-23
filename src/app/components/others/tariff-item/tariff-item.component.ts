import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from 'src/app/shared/utils/format-date';
import { CommonModule } from '@angular/common';
import { ITariff, TariffWeight } from 'src/app/temp';

@Component({
  standalone: true,
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss'],
  imports: [CommonModule],
})
export class TariffItemComponent implements OnInit {
  @Input() tariff: ITariff;
  public isCurrent: boolean;
  public showHoverDescription: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isCurrent = this.tariff.weight == TariffWeight.CURRENT;
  }

  formatDate(date: Date, template: string): string {
    return formatDate(date, template);
  }
}
