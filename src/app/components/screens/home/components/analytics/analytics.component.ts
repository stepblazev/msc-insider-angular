import { Component } from '@angular/core';
import { IOption } from 'src/app/components/ui/controls/select/select.component';
import { ITabSelectOption } from 'src/app/components/ui/tabs-select/tabs-select.component';

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
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {
  public fullscreen: boolean = false;

  public typeOptions: ITabSelectOption<string>[] = assetsTypeOptions;
  public currentType: ITabSelectOption<string> = assetsTypeOptions[0];

  public chartTypeOptions: ITabSelectOption<string>[] = chartTypeOptions;
  public currentChartType: ITabSelectOption<string> = chartTypeOptions[0];

  public payerTypes: IOption<string>[] = payerType;
  public currentPayerType: IOption<string> = payerType[0];

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
