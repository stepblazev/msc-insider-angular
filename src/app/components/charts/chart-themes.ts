import { EChartsOption, TooltipComponentOption } from 'echarts';

// NOTE temp file
// NOTE temp file
// NOTE temp file

export function getTooltipSettings(): TooltipComponentOption {
  return {
    trigger: 'axis',
    axisPointer: {
      animation: true,
      label: {
        formatter: function (params) {
          const date = new Date(params.value);
          return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
        },
      },
    },
    confine: true,
    padding: 24,
    backgroundColor: 'rgba(39, 40, 46, 0.60)',
    borderColor: '#1BCD54',
    position: (point: any, params: any, dom: any, rect: any, size: any) => {
      return [point[0] + 5, point[1] - size.contentSize[1] - 5];
    },
    textStyle: {
      color: '#FFF',
      fontSize: 16,
    },
    transitionDuration: 0.2,
    extraCssText:
      'box-shadow: 8px 8px 15px 0px rgba(0, 0, 0, 0.30); backdrop-filter: blur(8px); border-radius: 16px 16px 16px 0',
  };
}

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

export function getSolidChartOptions(color: string, data: any): EChartsOption {
  return {
    color: color,
    textStyle: {
      fontSize: 14,
      fontFamily: 'Inter',
    },
    grid: {
      left: -35,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: true,
      show: true,
      borderWidth: 0,
      backgroundColor: '#0E0E15',
    },
    title: {
      show: false,
    },
    tooltip: getTooltipSettings(),
    xAxis: {
      type: 'time',
      min: new Date('2018-01-01'),
      max: new Date('2023-01-01'),
      axisLabel: {
        hideOverlap: true,
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
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '10%'],
      offset: -10,
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
              { offset: 0, color: color },
              { offset: 1, color: 'transparent' },
            ],
          },
        },
        symbolSize: 8,
        emphasis: {
          itemStyle: {
            borderColor: color,
            borderWidth: 13,
            opacity: 0.3,
            color: color,
          },
        },
        data,
      },
    ],
  };
}

export function getDynamicChartOptions(data: any): EChartsOption {
  return {
    textStyle: {
      fontSize: 14,
      fontFamily: 'Inter',
    },
    grid: {
      left: -35,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: true,
      show: true,
      borderWidth: 0,
      backgroundColor: '#0E0E15',
    },
    title: {
      show: false,
    },
    tooltip: getTooltipSettings(),
    xAxis: {
      type: 'time',
      min: new Date('2018-01-01'),
      max: new Date('2023-01-01'),
      axisLabel: {
        hideOverlap: true,
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
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '10%'],
      offset: -10,
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
        lineStyle: {
          color: 'blue',
        },
        name: 'USD/RUB',
        type: 'line',
        showSymbol: false,
        symbolSize: 8,
        emphasis: {
          itemStyle: {
            borderColor: '#1BCD54',
            borderWidth: 13,
            opacity: 0.3,
            color: '#1BCD54',
          },
        },
        data,
      },
    ],
    visualMap: {
      show: false,
      dimension: 0,
    },
  };
}

export function getDoubleChartOptions(
  firstData: any,
  secondData: any
): EChartsOption {
  return {
    textStyle: {
      fontSize: 14,
      fontFamily: 'Inter',
    },
    grid: {
      left: -35,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: true,
      show: true,
      borderWidth: 0,
      backgroundColor: '#0E0E15',
    },
    title: {
      show: false,
    },
    tooltip: getTooltipSettings(),
    xAxis: {
      type: 'time',
      min: new Date('2018-01-01'),
      max: new Date('2023-01-01'),
      axisLabel: {
        hideOverlap: true,
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
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '10%'],
      offset: -10,
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
        color: '#70FF00',
        name: 'Шорт',
        type: 'line',
        showSymbol: false,
        symbolSize: 8,
        lineStyle: {
          color: '#70FF00',
        },
        emphasis: {
          itemStyle: {
            borderColor: '#70FF00',
            borderWidth: 13,
            opacity: 0.3,
            color: '#70FF00',
          },
        },
        data: firstData,
        markLine: {
          symbol: 'pin',
          symbolOffset: -5,
          emphasis: {
            disabled: true,
          },
          label: {
            show: true,
            position: 'insideStart',
            color: 'black',
            offset: [-5, 0, 0, 0],
            backgroundColor: '#70FF00',
            padding: [4, 12, 4, 12],
            borderRadius: [0, 8, 8, 0],
          },
          data: [
            {
              name: 'maximum',
              type: 'max',
            },
          ],
        },
      },
      {
        color: '#FF5C00',
        name: 'Лонг',
        type: 'line',
        showSymbol: false,
        symbolSize: 8,
        emphasis: {
          itemStyle: {
            borderColor: '#FF5C00',
            borderWidth: 13,
            opacity: 0.3,
            color: '#FF5C00',
          },
        },
        lineStyle: {
          color: '#FF5C00',
        },
        data: secondData,
        markLine: {
          symbol: 'pin',
          symbolOffset: -5,
          emphasis: {
            disabled: true,
          },
          label: {
            show: true,
            position: 'insideStart',
            color: 'black',
            offset: [-5, 0, 0, 0],
            backgroundColor: '#FF5C00',
            padding: [4, 12, 4, 12],
            borderRadius: [0, 8, 8, 0],
          },
          lineStyle: {
            cap: 'round',
          },
          data: [
            {
              name: 'maximum',
              type: 'max',
            },
            // {
            //     name: 'coordinate',
            //     coord: [10, 20]
            // }, {
            //     name: 'fixed x position',
            //     yAxis: 10,
            //     x: '90%'
            // },

            // {
            //     name: 'screen coordinate',
            //     x: 100,
            //     y: 100
            // }
          ],
        },
      },
    ],
  };
}
