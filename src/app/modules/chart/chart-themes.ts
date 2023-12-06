import { EChartsOption } from 'echarts';

export const baseOptions: EChartsOption = {
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
    },
  ],
};

export function getLoadingOptions(
  color: string,
  text: string = 'Загрузка данных'
): object {
  return {
    color,
    text,
    textColor: '#FFF',
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    maskColor: 'rgba(0, 0, 0, 0.8)',
  };
}
