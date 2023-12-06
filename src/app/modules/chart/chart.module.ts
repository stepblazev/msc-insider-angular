import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartService } from './chart.service';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  providers: [ChartService],
  declarations: [LineChartComponent],
  imports: [CommonModule, NgxEchartsModule],
})
export class ChartModule {}
