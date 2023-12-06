import { Component } from '@angular/core';
import { ChartService } from '../../chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  constructor(public chartServive: ChartService) {}
}
