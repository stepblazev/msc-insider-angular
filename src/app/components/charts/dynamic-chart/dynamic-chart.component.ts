import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  standalone: true,
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss'],
  imports: [CommonModule, NgxEchartsModule],
})
export class DynamicChartComponent {
  @Input() options: EChartsOption;
  @Input() loadingOpt: object = {};

  @Input() loading: boolean = false;
  @Input() fullscreen: boolean = false;

  constructor() {}
}
