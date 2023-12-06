import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { getLoadingOptions } from 'src/app/modules/chart/chart-themes';

@Component({
  standalone: true,
  selector: 'app-basic-update',
  templateUrl: './basic-update.component.html',
  styleUrls: ['./basic-update.component.scss'],
  imports: [CommonModule, NgxEchartsModule],
})
export class BasicUpdateComponent implements OnInit {
  options: EChartsOption;

  public fullscreen: boolean = false;
  public loading: boolean = false;
  public loadingOpt: any = {};

  constructor() {}

  ngOnInit(): void {
    this.updateChartData();
    this.loadingOpt = getLoadingOptions('red', 'Загрузка данных графика');
  }

  showLoading() {
    this.loading = true;
    setTimeout(() => {
      this.updateChartData();
      this.loading = false;
    }, 1000);
  }

  updateChartData() {
    this.options = {
      color: '#70FF00',
      textStyle: {
        fontSize: 14,
        fontFamily: 'Inter',
      },
      grid: {
        left: -35,
        right: 0,
        top: 30,
        bottom: 0,
        containLabel: true,
        backgroundColor: '#0E0E15',
      },
      title: {
        text: 'Аналитика',
        show: false,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: true,
        },
        confine: true,
        padding: 24,
        backgroundColor: 'rgba(39, 40, 46, 0.60)',
        borderColor: '#1BCD54',
        position: (point, params, dom, rect, size) => {
          return [point[0] + 5, point[1] - size.contentSize[1] - 5];
        },
        extraCssText:
          'box-shadow: 8px 8px 15px 0px rgba(0, 0, 0, 0.30); backdrop-filter: blur(16px); border-radius: 16px 16px 16px 0',
        textStyle: {
          color: '#FFF',
          fontSize: 16,
        },
      },
      xAxis: {
        type: 'time',
        min: new Date('2014-01-01').getTime(),
        max: new Date('2023-01-01').getTime(),
        axisLabel: {
          color: 'white',
          verticalAlign: 'top',
          align: 'center',
        },
        axisLine: {
          lineStyle: {
            color: '#FFF',
          },
        },
        axisPointer: {
          show: true,
          lineStyle: {
            color: '#577775',
            type: 'solid',
          },
        },
        position: 'bottom',
      },
      yAxis: {
        type: 'value',
        interval: 1000,
        offset: -10,
        boundaryGap: [0, '10%'],
        splitLine: {
          show: true,
          lineStyle: {
            color: '#CFCFD0',
            opacity: 0.25,
          },
        },
        axisLabel: {
          color: 'white',
          verticalAlign: 'bottom',
          align: 'left',
        },
      },
      series: [
        {
          name: 'USD/RUB',
          type: 'line',
          showSymbol: false,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(112, 255, 0, 0.28)' },
                { offset: 1, color: 'rgba(112, 255, 0, 0.00)' },
              ],
            },
          },
          symbolSize: 8,
          emphasis: {
            itemStyle: {
              borderColor: 'rgba(27, 205, 84, 0.30)',
              borderWidth: 13,
              color: '#1BCD54',
            },
          },
          data: this.generateData(),
        },
      ],
    };
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
