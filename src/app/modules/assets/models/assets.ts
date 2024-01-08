import { EAssetTypes } from './asset-types';

export type IAsset = {
  id: number;
  type: EAssetTypes;
  name: string;
  isin: string;
  price: {
    value: number | null;
    daily_changes_perc: number | null;
    daily_changes_value: number | null;
  };
  rsi: {
    fiz: number | null;
    yur: number | null;
  };
};

export type IUnavalibleAsset = Omit<IAsset, 'price' | 'rsi'>;
