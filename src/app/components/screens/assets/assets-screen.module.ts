import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';
import { FavoritesModule } from 'src/app/modules/favorites/favorites.module';
import { SubscriptionModule } from 'src/app/modules/subscription/subscription.module';
import { AssetsModule } from 'src/app/modules/assets/assets.module';
import { LoaderDotsComponent } from '../../ui/loader-dots/loader-dots.component';
import { AssetsListComponent } from './assets-list/assets-list.component';

@NgModule({
  declarations: [AssetsComponent, AssetsListComponent],
  imports: [
    CommonModule,
    AssetsModule,
    SubscriptionModule,
    FavoritesModule,
    LoaderDotsComponent,
  ],
})
export class AssetsScreenModule {}
