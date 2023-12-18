import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartPanelComponent } from '../../features/chart-panel/chart-panel.component';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, ChartPanelComponent],
})
export class ChartScreenModule {}
