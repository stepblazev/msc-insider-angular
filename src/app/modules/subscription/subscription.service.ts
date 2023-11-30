import { Injectable } from '@angular/core';
import { SubscriptionRepository } from './repository/subscription';
import { ITariff } from './models/tariff';
import { ISubscription } from './models/subscription';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from 'src/constants';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  public isTariffPopupOpened: boolean = false;
  public isLoading: boolean = false;

  public tariffs: ITariff[] = [];
  public subscription: ISubscription | null = null;

  constructor(
    private readonly _subscriptionRepository: SubscriptionRepository,
    private readonly _localStorageService: LocalStorageService,
    private readonly _notifierService: NotifierService
  ) {}

  public openTariffPopup(): void {
    this.isTariffPopupOpened = true;
  }

  public closeTariffPopup(): void {
    this.isTariffPopupOpened = false;
  }

  public fetchTariffList(): void {
    this.tariffs =
      this._localStorageService.getItem<ITariff[]>(
        LOCAL_STORAGE_KEYS.TARIFFS
      ) || [];

    this.isLoading = true;
    this._subscriptionRepository.getTariffs().subscribe((response) => {
      if (response.success) {
        this.tariffs = response.data;
        this._localStorageService.setItem(
          LOCAL_STORAGE_KEYS.TARIFFS,
          response.data
        );
      } else if (response.error) {
        console.error(response.error);
        this._notifierService.notify(
          'error',
          'Не удалось загрузить список тарифов'
        );
      }
      this.isLoading = false;
    });
  }

  public fetchCurrentSubscription(): void {
    this.subscription =
      this._localStorageService.getItem<ISubscription>(
        LOCAL_STORAGE_KEYS.SUBSCRIPTION
      ) || null;

    this.isLoading = true;
    this._subscriptionRepository
      .getCurrentSubscription()
      .subscribe((response) => {
        if (response.success) {
          this.subscription = response.data || null;
          this._localStorageService.setItem(
            LOCAL_STORAGE_KEYS.SUBSCRIPTION,
            this.subscription
          );
        } else if (response.error) {
          console.error(response.error);
          this._notifierService.notify(
            'error',
            'Не удалось загрузить ваш тариф'
          );
        }
        this.isLoading = false;
      });
  }

  public fetchNewSubscription(tariffId: number): void {
    this.isLoading = true;
    this._subscriptionRepository
      .updateSubscription({ tariff_id: tariffId })
      .subscribe((response) => {
        if (response.success) {
          this.subscription = response.data || null;
          this._localStorageService.setItem(
            LOCAL_STORAGE_KEYS.SUBSCRIPTION,
            this.subscription
          );
        } else if (response.error) {
          console.error(response.error);
          this._notifierService.notify(
            'error',
            'Не удалось загрузить ваш тариф'
          );
        }

        this.isLoading = false;
      });
  }
}
