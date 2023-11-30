import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionRepository } from './repository/subscription';
import { SubscriptionService } from './subscription.service';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffItemComponent } from './components/tariff-item/tariff-item.component';
import { PriceFormatPipe } from 'src/app/pipes/price-format.pipe';

@NgModule({
  providers: [SubscriptionRepository, SubscriptionService],
  declarations: [TariffListComponent, TariffItemComponent],
  imports: [CommonModule, PriceFormatPipe],
  exports: [TariffListComponent],
})
export class SubscriptionModule {}
