export interface ITariff {
  id: number;
  name: string;
  role_id: number;
  description: string;
  description_hover?: string;
  terms: string;
  price: number;
}
