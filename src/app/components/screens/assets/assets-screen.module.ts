import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';
import { AssetsHomeComponent } from './assets-home/assets-home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AssetsStocksComponent } from './assets-stocks/assets-stocks.component';
import { AssetsIndexesComponent } from './assets-indexes/assets-indexes.component';
import { AssetsProductsComponent } from './assets-products/assets-products.component';
import { AssetsMoreComponent } from './assets-more/assets-more.component';
import { TariffListModule } from '../../features/tariff-list/tariff-list.module';
import { FavoritesModule } from 'src/app/modules/favorites/favorites.module';

@NgModule({
  declarations: [
    AssetsComponent,
    AssetsHomeComponent,
    AssetsStocksComponent,
    AssetsIndexesComponent,
    AssetsProductsComponent,
    AssetsMoreComponent,
  ],
  imports: [
    CommonModule,
    TariffListModule,
    FavoritesModule,
    RouterLink,
    RouterOutlet,
  ],
})
export class AssetsScreenModule {}
