import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-basic-update',
  templateUrl: './basic-update.component.html',
  styleUrls: ['./basic-update.component.scss'],
})
export class BasicUpdateComponent implements OnInit {
  options: EChartsOption;
  updateOptions: EChartsOption;

  public loading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.options = {
      color: '#1BCD54',
      backgroundColor: '#0E0E15',
      title: {
        text: 'Аналитика',
        show: false,
      },
      tooltip: {
        padding: 24,
        borderRadius: 16,
        backgroundColor: 'rgba(39, 40, 46, 0.60)',
        borderColor: '#1BCD54',
        extraCssText:
          'box-shadow: 8px 8px 15px 0px rgba(0, 0, 0, 0.30); backdrop-filter: blur(16px);',
        textStyle: {
          color: '#FFF',
          fontSize: 16,
        },
        trigger: 'axis',
        axisPointer: {
          animation: true,
        },
      },
      xAxis: {
        type: 'time',
        min: new Date('2014-01-01').getTime(),
        max: new Date('2023-12-31').getTime(),
        axisLabel: {
          color: 'white',
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '10%'],
        axisLabel: {
          color: 'white',
        },
      },
      series: [
        {
          name: 'Test',
          type: 'line',
          showSymbol: false,
          areaStyle: {
            color: 'rgba(112, 255, 0, 0.28)',
          },
          data: [
            [new Date('2014-01-01').getTime(), 25000],
            [new Date('2014-06-01').getTime(), 25000],
            [new Date('2015-01-01').getTime(), 40000],
            [new Date('2015-06-01').getTime(), 55000],
            [new Date('2016-01-01').getTime(), 33000],
            [new Date('2016-06-01').getTime(), 70000],
            [new Date('2017-01-01').getTime(), 65000],
            [new Date('2017-06-01').getTime(), 80000],
            [new Date('2018-01-01').getTime(), 75000],
            [new Date('2018-06-01').getTime(), 90000],
            [new Date('2019-01-01').getTime(), 120000],
            [new Date('2019-06-01').getTime(), 100000],
            [new Date('2020-01-01').getTime(), 130000],
            [new Date('2020-06-01').getTime(), 110000],
            [new Date('2021-01-01').getTime(), 200000],
            [new Date('2021-06-01').getTime(), 120000],
            [new Date('2022-01-01').getTime(), 140000],
            [new Date('2022-06-01').getTime(), 75000],
            [new Date('2023-01-01').getTime(), 90000],
            [new Date('2023-06-01').getTime(), 60000],
            [new Date('2024-01-01').getTime(), 90000],
          ],
        },
      ],
    };
  }

  showLoading() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
