import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  public loading: boolean = false;
  public fullscreen: boolean = false;

  public options: EChartsOption = {};
  public loadingOptions: object = {};

  constructor() {}
}
