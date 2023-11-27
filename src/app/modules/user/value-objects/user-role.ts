import { ValueObject } from '../../../core/value-object';

enum PossibleRoles {
  free = 'free',
  base = 'base',
  middle = 'middle',
  max = 'max',
  admin = 'admin',
}

export { PossibleRoles as UserRoleLevels };

export interface IRole {
  id: number;
  name: string;
  slug: PossibleRoles;
}

export class UserRole extends ValueObject<IRole> {}
