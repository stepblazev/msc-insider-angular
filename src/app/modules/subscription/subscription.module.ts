import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionRepository } from './repository/subscription';
import { SubscriptionService } from './subscription.service';

@NgModule({
  providers: [SubscriptionRepository, SubscriptionService],
  declarations: [],
  imports: [CommonModule],
})
export class SubscriptionModule {}
