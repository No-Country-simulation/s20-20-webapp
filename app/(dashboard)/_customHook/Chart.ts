import { AreaSeries, ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

const initialData = [
  { time: '2018-12-22', value: 32.51 },
  { time: '2018-12-23', value: 31.11 },
  { time: '2018-12-24', value: 27.02 },
  { time: '2018-12-25', value: 27.32 },
  { time: '2018-12-26', value: 25.17 },
  { time: '2018-12-27', value: 28.89 },
  { time: '2018-12-28', value: 25.46 },
  { time: '2018-12-29', value: 23.92 },
  { time: '2018-12-30', value: 22.68 },
  { time: '2018-12-31', value: 22.67 },
];

export default function useChart(props: any = {}) {
  const chartRef = useRef<HTMLDivElement>(null);

  const {
    data = initialData,
    colors: {
      backgroundColor = 'transparent',
      lineColor = '#FF00C8',
      textColor = 'white',
      areaTopColor = '#EF0FC0',
      areaBottomColor = '#504456',
      gridColor = 'transparent',
    } = {},
  } = props;

  useEffect(() => {
    const theChart = chartRef.current!

    const handleResize = () => {
      chart.applyOptions({ width: theChart.clientWidth });
    };

    const chart = createChart(theChart, {
        layout: {
            background: { type: ColorType.Solid, color: backgroundColor },
            textColor,
        },
        grid: {
          vertLines: {color: gridColor},
          horzLines: {color: gridColor},
        },
        width: theChart.clientWidth,
        height: 300,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addSeries(AreaSeries, { lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);

        chart.remove();
    };
  }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor])

  return chartRef
}