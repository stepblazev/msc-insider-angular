import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffListComponent } from './tariff-list.component';
import { SubscriptionModule } from 'src/app/modules/subscription/subscription.module';
import { TariffItemComponent } from './tariff-item/tariff-item.component';

@NgModule({
  declarations: [TariffListComponent, TariffItemComponent],
  exports: [TariffListComponent],
  imports: [CommonModule, SubscriptionModule],
})
export class TariffListModule {}
