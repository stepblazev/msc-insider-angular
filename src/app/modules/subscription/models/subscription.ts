export interface ISubscription {
  id: number;
  tariff_id: number;
  status: string;
  expires_at: Date;
  created_at: Date;
}
