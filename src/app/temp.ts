export enum TariffWeight {
  LOWER = 'Перейти',
  CURRENT = 'Продлить подписку',
  HIGHER = 'Повысить тариф',
}

export interface ITariff {
  id?: number;
  name: string;
  description: {
    default: string;
    hover?: string;
  };
  weight: TariffWeight;
  expireDate?: Date;
  terms: string;
  price: string | number;
  color?: {
    head: string;
    button: string;
  };
  popular?: boolean;
}

export const tariffs: ITariff[] = [
  {
    weight: TariffWeight.LOWER,
    name: 'Без подписки',
    description: {
      default: '10 акций и пример валютной пары, индекса, товар и др.',
      hover: '10 акций и пример валютной пары, индекса, товар и др.',
    },
    terms: 'Всегда бесплатно',
    price: '0',
    color: {
      head: 'spliced-block-gradient--gray',
      button: 'button--gray',
    },
  },
  {
    weight: TariffWeight.CURRENT,
    name: 'Базовый',
    description: {
      default: '20 акций, половина валютных пар, индексов, товаров и др.',
      hover: '20 акций, половина валютных пар, индексов, товаров и др.',
    },
    terms: '1 участник / месяц',
    price: '1 200',
    color: {
      head: 'spliced-block-gradient',
      button: 'button--gray',
    },
    expireDate: new Date(),
  },
  {
    weight: TariffWeight.HIGHER,
    name: 'Продвинутый',
    description: {
      default:
        '30 акций, половина валютных пар, индексов, товаров и др + оповещения о сигналах.',
      hover:
        '30 акций, половина валютных пар, индексов, товаров и др + оповещения о сигналах.',
    },
    terms: '1 участник / месяц',
    price: '2 300',
    color: {
      head: 'spliced-block-gradient--green',
      button: '',
    },

    popular: true,
  },
  {
    weight: TariffWeight.HIGHER,
    name: 'Экспертный',
    description: {
      default:
        'Все акции (40+), все валютные пары, индексы, товары и др  + оповещения о сигналах. ',
      hover:
        'Все акции (40+), все валютные пары, индексы, товары и др  + оповещения о сигналах. ',
    },
    terms: '1 участник / месяц',
    price: '3 400',
    color: {
      head: 'spliced-block-gradient--error',
      button: 'button--error',
    },
  },
];
