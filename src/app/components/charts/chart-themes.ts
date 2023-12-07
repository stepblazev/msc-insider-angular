import { EChartsOption } from 'echarts';

// NOTE temp file
// NOTE temp file
// NOTE temp file

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
      min: new Date('2014-01-01'),
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
  const colors = {
    increase: '#008000', // зеленый
    decrease: '#ff0000', // красный
  };

  let previousValue = data[0];
  const colorData = data.map((value: any, index: any) => {
    if (index === 0) {
      return colors.increase;
    }
    const color = value > previousValue ? colors.increase : colors.decrease;
    previousValue = value;
    return color;
  });

  return {
    color: '#1BCD54',
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
      min: new Date('2014-01-01'),
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
        itemStyle: {
          color: 'red',
        },
      },
    ],
  };
}
