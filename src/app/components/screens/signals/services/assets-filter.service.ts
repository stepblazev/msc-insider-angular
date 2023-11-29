import { Injectable } from '@angular/core';
import { IOption } from 'src/app/components/ui/controls/select/select.component';

export enum ESignalTypes {
  STOCKS = 'Акция',
  PRODUCT = 'Товар',
  CURRENCY = 'Валютная пара',
}

export enum ERSITypes {
  SUCCESS = 'bg-greenPrimary',
  NEUTRAL = 'bg-[#577775]',
  FAIL = 'bg-error',
}

export interface IRSI {
  value: number;
  type: ERSITypes;
}

export interface ISignal {
  id: number;
  type: ESignalTypes;
  name: string;
  RSI_legal: IRSI;
  RSI_individual: IRSI;
}

const signals: ISignal[] = [
  {
    id: 1,
    type: ESignalTypes.STOCKS,
    name: 'AAPL',
    RSI_legal: { value: 60, type: ERSITypes.NEUTRAL },
    RSI_individual: { value: 65, type: ERSITypes.NEUTRAL },
  },
  {
    id: 2,
    type: ESignalTypes.PRODUCT,
    name: 'Gold',
    RSI_legal: { value: 75, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 80, type: ERSITypes.SUCCESS },
  },
  {
    id: 3,
    type: ESignalTypes.CURRENCY,
    name: 'USD/EUR',
    RSI_legal: { value: 45, type: ERSITypes.FAIL },
    RSI_individual: { value: 50, type: ERSITypes.FAIL },
  },
  {
    id: 4,
    type: ESignalTypes.STOCKS,
    name: 'GOOGL',
    RSI_legal: { value: 70, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 75, type: ERSITypes.SUCCESS },
  },
  {
    id: 5,
    type: ESignalTypes.PRODUCT,
    name: 'Silver',
    RSI_legal: { value: 55, type: ERSITypes.NEUTRAL },
    RSI_individual: { value: 60, type: ERSITypes.NEUTRAL },
  },
  {
    id: 6,
    type: ESignalTypes.CURRENCY,
    name: 'GBP/USD',
    RSI_legal: { value: 80, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 85, type: ERSITypes.SUCCESS },
  },
  {
    id: 7,
    type: ESignalTypes.STOCKS,
    name: 'MSFT',
    RSI_legal: { value: 68, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 72, type: ERSITypes.SUCCESS },
  },
  {
    id: 8,
    type: ESignalTypes.PRODUCT,
    name: 'Oil',
    RSI_legal: { value: 40, type: ERSITypes.FAIL },
    RSI_individual: { value: 45, type: ERSITypes.FAIL },
  },
  {
    id: 9,
    type: ESignalTypes.CURRENCY,
    name: 'EUR/JPY',
    RSI_legal: { value: 50, type: ERSITypes.NEUTRAL },
    RSI_individual: { value: 55, type: ERSITypes.NEUTRAL },
  },
  {
    id: 10,
    type: ESignalTypes.STOCKS,
    name: 'AMZN',
    RSI_legal: { value: 78, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 82, type: ERSITypes.SUCCESS },
  },
  {
    id: 11,
    type: ESignalTypes.PRODUCT,
    name: 'Copper',
    RSI_legal: { value: 63, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 68, type: ERSITypes.SUCCESS },
  },
  {
    id: 12,
    type: ESignalTypes.CURRENCY,
    name: 'AUD/USD',
    RSI_legal: { value: 35, type: ERSITypes.FAIL },
    RSI_individual: { value: 40, type: ERSITypes.FAIL },
  },
  {
    id: 13,
    type: ESignalTypes.STOCKS,
    name: 'FB',
    RSI_legal: { value: 88, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 90, type: ERSITypes.SUCCESS },
  },
  {
    id: 14,
    type: ESignalTypes.PRODUCT,
    name: 'Platinum',
    RSI_legal: { value: 52, type: ERSITypes.NEUTRAL },
    RSI_individual: { value: 57, type: ERSITypes.NEUTRAL },
  },
  {
    id: 15,
    type: ESignalTypes.CURRENCY,
    name: 'USD/CAD',
    RSI_legal: { value: 73, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 78, type: ERSITypes.SUCCESS },
  },
  {
    id: 16,
    type: ESignalTypes.STOCKS,
    name: 'TSLA',
    RSI_legal: { value: 58, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 63, type: ERSITypes.SUCCESS },
  },
  {
    id: 17,
    type: ESignalTypes.PRODUCT,
    name: 'Natural Gas',
    RSI_legal: { value: 48, type: ERSITypes.FAIL },
    RSI_individual: { value: 53, type: ERSITypes.FAIL },
  },
  {
    id: 18,
    type: ESignalTypes.CURRENCY,
    name: 'NZD/USD',
    RSI_legal: { value: 68, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 72, type: ERSITypes.SUCCESS },
  },
  {
    id: 19,
    type: ESignalTypes.STOCKS,
    name: 'NFLX',
    RSI_legal: { value: 77, type: ERSITypes.SUCCESS },
    RSI_individual: { value: 80, type: ERSITypes.SUCCESS },
  },
  {
    id: 20,
    type: ESignalTypes.PRODUCT,
    name: 'Palladium',
    RSI_legal: { value: 62, type: ERSITypes.NEUTRAL },
    RSI_individual: { value: 67, type: ERSITypes.NEUTRAL },
  },
];

export interface IAssetsFilter {
  name: string;
  type: IOption<ESignalTypes>[];
  RSI: IOption<string>[];
}

@Injectable({
  providedIn: 'root',
})
export class AssetsFilterService {
  public signals: ISignal[] = signals;

  public filter: IAssetsFilter = {
    name: '',
    type: [
      { label: ESignalTypes.CURRENCY, value: ESignalTypes.CURRENCY },
      { label: ESignalTypes.STOCKS, value: ESignalTypes.STOCKS },
      { label: ESignalTypes.PRODUCT, value: ESignalTypes.PRODUCT },
    ],
    RSI: [
      { label: 'Сигнал к покупке для физ. лиц', value: 'ФИЗ' },
      { label: 'Сигнал к покупке для юр. лиц', value: 'ЮР' },
    ],
  };

  constructor() {}

  setFilter(newFilter: IAssetsFilter) {
    this.filter = newFilter;
    this.signals = this.signals.filter((el) => {
      return el.name.toLowerCase().includes(newFilter.name.toLowerCase());
    });
  }
}
