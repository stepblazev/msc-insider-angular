import { Injectable } from '@angular/core';
import { SubscriptionRepository } from './repository/subscription';
import { ITariff } from './models/tariff';
import { ISubscription } from './models/subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  public isTariffPopupOpened: boolean = false;

  public tariffs: ITariff[] = [];
  public subscription: ISubscription | null = null;

  constructor(
    private readonly _subscriptionRepository: SubscriptionRepository
  ) {}

  public openTariffPopup(): void {
    this.isTariffPopupOpened = true;
  }

  public closeTariffPopup(): void {
    this.isTariffPopupOpened = false;
  }

  public fetchTariffList(): void {
    this._subscriptionRepository.getTariffs().subscribe((response) => {
      if (response.success) {
        this.tariffs = response.data;
      }
    });
  }
}
