import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import type { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import {
  getDoubleChartOptions,
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
export class BasicUpdateComponent implements OnInit, OnChanges {
  @Input() currentType: string = '';
  options: EChartsOption;

  public color: string = '#70FF00';
  public loading: boolean = false;
  public loadingOpt: any = {};

  ngOnInit(): void {
    this.updateChartData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentType']) {
      this.showLoading();
    }
  }

  showLoading() {
    this.loading = true;
    setTimeout(() => {
      this.updateChartData();
      this.loading = false;
    }, 1000);
  }

  updateChartData() {
    switch (this.currentType) {
      case 'fiz':
        this.loadingOpt = getLoadingOptions(this.color);
        this.options = getSolidChartOptions(this.color, this.generateData());
        break;
      case 'yur':
        this.options = getDoubleChartOptions(
          this.generateData(),
          this.generateData()
        );
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
      // Симуляция перерыва
      //   if (
      //     currentDate < new Date('2021-01-01') &&
      //     currentDate > new Date('2020-01-01')
      //   ) {
      //     data.push([currentDate.getTime(), null]);
      //     currentDate.setMonth(currentDate.getMonth() + 1);
      //     continue;
      //   }

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
