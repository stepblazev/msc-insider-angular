import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { BasicUpdateComponent } from '../../basic-update/basic-update.component';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, BasicUpdateComponent],
})
export class ChartScreenModule {}
