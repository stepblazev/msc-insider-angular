import { IUserAuthPersistenceModel } from './persistence-models/user-auth';
import { UserModel } from './models/user';
import { UserRole, UserRoleLevels } from './value-objects/user-role';
import { IUserMePersistenceModel } from './persistence-models/user-me';

export class UserSerializer {
  public static authUserToModel(user: IUserAuthPersistenceModel) {
    return new UserModel({
      id: user.id,
      email: user.email,
      name: user.name,
      photo: user.photo,
      role: new UserRole({
        ...user.role,
        slug: user.role.slug as UserRoleLevels,
      }),
    });
  }

  public static meUserToModel(user: IUserMePersistenceModel) {
    return new UserModel({
      id: user.id,
      email: user.email,
      photo: user.photo,
      name: user.name,
      role: new UserRole({
        ...user.role,
        slug: user.role.slug as UserRoleLevels,
      }),
    });
  }
}
