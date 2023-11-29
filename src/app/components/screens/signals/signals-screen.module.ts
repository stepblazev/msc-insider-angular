import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals.component';
import { AssetsTableComponent } from './components/assets-table/assets-table.component';
import { FavoritesModule } from 'src/app/modules/favorites/favorites.module';
import { CheckboxComponent } from '../../ui/controls/checkbox/checkbox.component';
import { AssetsFilterComponent } from './components/assets-filter/assets-filter.component';
import { SelectComponent } from '../../ui/controls/select/select.component';
import { SearchBarComponent } from '../../ui/controls/search-bar/search-bar.component';
import { TariffListModule } from '../../features/tariff-list/tariff-list.module';

@NgModule({
  declarations: [SignalsComponent, AssetsFilterComponent, AssetsTableComponent],
  imports: [
    CommonModule,
    FavoritesModule,
    TariffListModule,
    CheckboxComponent,
    SelectComponent,
    SearchBarComponent,
  ],
})
export class SignalsScreenModule {}
