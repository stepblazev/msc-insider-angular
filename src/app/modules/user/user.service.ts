import { Injectable } from '@angular/core';
import { IUserAuthPersistenceModel } from './persistence-models/user-auth';
import { UserModel } from './models/user';
import { UserSerializer } from './user.serializer';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '../../../constants';
import { UserRepository } from './repositories/user';
import { lastValueFrom } from 'rxjs';
import { AuthRepository } from '../auth/repository/auth';
import { ELoadingStatus } from '../../core/loading-status';
import { IUpdateUserDataDTO } from './dto/profile-edit.dto';
import { SubscriptionService } from '../subscription/subscription.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser: UserModel | undefined;
  public isAuthorized = false;
  public loadingStatus: ELoadingStatus = ELoadingStatus.INITIAL_LOADING;

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _userRepository: UserRepository,
    private readonly _authRepository: AuthRepository,
    private readonly _subscriptionService: SubscriptionService
  ) {}

  public async authorize(user: IUserAuthPersistenceModel) {
    this._localStorageService.setItem(LOCAL_STORAGE_KEYS.USER, user);
    this._localStorageService.setItem(LOCAL_STORAGE_KEYS.AUTHORIZED, 1);

    this.isAuthorized = true;
    this.currentUser = UserSerializer.authUserToModel(user);

    this._subscriptionService.fetchCurrentSubscription();
  }

  public async updateAuthorize() {
    if (this.loadingStatus !== ELoadingStatus.INITIAL_LOADING) {
      this.loadingStatus = ELoadingStatus.LOADING;
    }

    const isAuthorized = this._localStorageService.getItem<number>(
      LOCAL_STORAGE_KEYS.AUTHORIZED
    );
    if (typeof isAuthorized !== 'number' || isAuthorized !== 1) {
      this.loadingStatus = ELoadingStatus.LOADED;
      return;
    }
    this.isAuthorized = true;

    const user = this._localStorageService.getItem<IUserAuthPersistenceModel>(
      LOCAL_STORAGE_KEYS.USER
    );
    if (user) {
      this.currentUser = UserSerializer.authUserToModel(user);
    } else {
      const userData = (await lastValueFrom(this._userRepository.me())).data;
      this.currentUser = UserSerializer.meUserToModel(userData);
    }

    this.loadingStatus = ELoadingStatus.LOADED;
  }

  public updateUserData(payload: IUpdateUserDataDTO) {
    const user = this._localStorageService.getItem<IUserAuthPersistenceModel>(
      LOCAL_STORAGE_KEYS.USER
    );
    if (!this.currentUser || !user) {
      return;
    }

    if (payload.name) {
      this.currentUser.name = payload.name;
    }

    if (payload.email) {
      this.currentUser.email = payload.email;
    }

    if (payload.photo !== undefined) {
      this.currentUser.photo = payload.photo;
    }

    this._localStorageService.setItem(LOCAL_STORAGE_KEYS.USER, {
      ...user,
      ...payload,
    });
  }

  public logout() {
    this._authRepository.logout();

    this.currentUser = undefined;
    this.isAuthorized = false;

    this._localStorageService.removeItem(LOCAL_STORAGE_KEYS.USER);
    this._localStorageService.removeItem(LOCAL_STORAGE_KEYS.AUTHORIZED);

    this._subscriptionService.subscription = null;
  }
}
