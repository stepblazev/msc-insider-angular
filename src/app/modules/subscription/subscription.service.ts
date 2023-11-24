import { Injectable } from '@angular/core';
import { SubscriptionRepository } from './repository/subscription';
import { ITariff } from './models/tariff';
import { ISubscription } from './models/subscription';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  public isTariffPopupOpened: boolean = false;
  public isLoading: boolean = false;

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
    this.isLoading = true;
    this._subscriptionRepository
      .getTariffs()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((response) => {
        if (response.success) {
          this.tariffs = response.data;
        }
      });
  }

  public fetchCurrentSubscription(): void {
    this.isLoading = true;
    this._subscriptionRepository
      .getCurrentSubscription()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((response) => {
        console.log(response);
        if (response.success) {
          this.subscription = response.data || null;
        }
      });
  }
}
