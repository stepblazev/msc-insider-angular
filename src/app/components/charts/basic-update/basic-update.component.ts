import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import {
  getDynamicChartOptions,
  getLoadingOptions,
  getSolidChartOptions,
} from 'src/app/components/charts/chart-themes';
import {
  IOption,
  SelectComponent,
} from '../../ui/controls/select/select.component';

@Component({
  standalone: true,
  selector: 'app-basic-update',
  templateUrl: './basic-update.component.html',
  styleUrls: ['./basic-update.component.scss'],
  imports: [CommonModule, NgxEchartsModule, SelectComponent],
})
export class BasicUpdateComponent implements OnInit {
  options: EChartsOption;

  public color: string = '#70FF00';
  public loading: boolean = false;
  public loadingOpt: any = {};

  public typesOptions: IOption<string>[] = [
    { label: 'Цветной график', value: 'solid' },
    { label: 'График динамики', value: 'dynamic' },
    { label: 'График для RSI', value: 'rsi' },
    { label: 'Двойной график', value: 'double' },
  ];
  public currentType: IOption<string> = this.typesOptions[0];

  ngOnInit(): void {
    this.updateChartData();
  }

  changeType(type: IOption<string>): void {
    this.currentType = type;
    this.showLoading();
  }

  showLoading() {
    this.loading = true;
    setTimeout(() => {
      this.updateChartData();
      this.loading = false;
    }, 1000);
  }

  updateChartData() {
    switch (this.currentType.value) {
      case 'solid':
        this.loadingOpt = getLoadingOptions(this.color);
        this.options = getSolidChartOptions(this.color, this.generateData());
        break;
      default:
        this.options = getDynamicChartOptions(this.generateData());
        break;
    }
  }

  generateData() {
    const data = [];
    let currentDate = new Date('2014-01-01');

    while (currentDate <= new Date('2023-01-01')) {
      let value;
      const randomVariability = Math.random();

      if (randomVariability < 0.05) {
        value = Math.floor(Math.random() * (4500 - 3000 + 1)) + 3000;
      } else if (randomVariability < 0.1) {
        value = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
      } else {
        value = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;
      }

      data.push([currentDate.getTime(), value]);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return data;
  }
}
