import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ITabSelectOption,
  TabsSelectComponent,
} from '../../ui/tabs-select/tabs-select.component';
import {
  IOption,
  SelectComponent,
} from '../../ui/controls/select/select.component';
import { TabsSelectSmallComponent } from '../../ui/tabs-select-small/tabs-select-small.component';
import { FormsModule } from '@angular/forms';
import { BasicUpdateComponent } from '../../charts/basic-update/basic-update.component';
import { Router, RouterLink } from '@angular/router';
import { DateInputComponent } from '../../ui/controls/date-input/date-input.component';
import { trigger } from '@angular/animations';
import { fullscreenAnimation } from './fullscreen-animation';

const assetsTypeOptions: ITabSelectOption<string>[] = [
  {
    label: 'Валютные пары',
    value: 'currency',
  },
  {
    label: 'Акции',
    value: 'stocks',
  },
  {
    label: 'Индексы',
    value: 'indexes',
  },
  {
    label: 'Товары',
    value: 'products',
  },
  {
    label: 'Другие',
    value: 'others',
  },
];

const chartTypeOptions: ITabSelectOption<string>[] = [
  {
    label: 'Позиции физических лиц',
    value: 'fiz',
  },
  {
    label: 'Позиции юридических лиц',
    value: 'yur',
  },
  {
    label: 'RSI',
    value: 'rsi',
  },
  {
    label: 'Фьючерс',
    value: 'futures',
  },
];

const payerType: IOption<string>[] = [
  {
    label: 'Физ. лица',
    value: 'fiz',
  },
  {
    label: 'Юр. лица',
    value: 'yur',
  },
  {
    label: 'Физ. + Юр. лица',
    value: 'all',
  },
];

@Component({
  standalone: true,
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss'],
  imports: [
    CommonModule,
    TabsSelectComponent,
    TabsSelectSmallComponent,
    SelectComponent,
    FormsModule,
    BasicUpdateComponent,
    RouterLink,
    DateInputComponent,
  ],
  animations: [trigger('fullscreenAnimation', fullscreenAnimation)],
})
export class ChartPanelComponent {
  public fullscreen: boolean = false;

  public typeOptions: ITabSelectOption<string>[] = assetsTypeOptions;
  public currentType: ITabSelectOption<string> = assetsTypeOptions[0];

  public chartTypeOptions: ITabSelectOption<string>[] = chartTypeOptions;
  public currentChartType: ITabSelectOption<string> = chartTypeOptions[0];

  public payerTypes: IOption<string>[] = payerType;
  public currentPayerType: IOption<string> = payerType[0];

  constructor(public router: Router) {}

  changePayerType(type: IOption<string>) {
    this.currentPayerType = type;
  }

  changeChartType(type: ITabSelectOption<string>) {
    this.currentChartType = type;
  }

  changeType(type: ITabSelectOption<string>) {
    this.currentType = type;
  }
}
