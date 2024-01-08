import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRepository } from './repository/assets';
import { PriceFormatPipe } from 'src/app/pipes/price-format.pipe';
import { AssetsService } from './assets.service';

@NgModule({
  providers: [AssetsRepository, AssetsService],
  imports: [CommonModule, PriceFormatPipe],
})
export class AssetsModule {}
