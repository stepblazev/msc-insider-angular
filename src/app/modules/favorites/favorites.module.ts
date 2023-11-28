import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';

@NgModule({
  declarations: [FavoriteButtonComponent],
  exports: [FavoriteButtonComponent],
  imports: [CommonModule],
})
export class FavoritesModule {}
