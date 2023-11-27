import { IRole } from '../../user/value-objects/user-role';

export interface ITariff {
  id: number;
  name: string;
  description: string;
  description_hover?: string;
  terms: string;
  price: number;
  role: IRole;
}
