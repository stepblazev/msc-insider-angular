import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/modules/subscription/subscription.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
})
export class TariffListComponent {
  constructor(public readonly _subscriptionService: SubscriptionService) {}
}
