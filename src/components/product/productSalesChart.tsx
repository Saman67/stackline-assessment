import React from 'react';
import {SalesData} from "../../store/productSlice";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, ChartOptions } from 'chart.js';
import 'chartjs-adapter-date-fns';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

type ProductSalesChartProps = {
  salesData: SalesData[]
}
export function ProductSalesChart({salesData}: ProductSalesChartProps) {

  const data = {
    labels: salesData.map(d => d.weekEnding),
    datasets: [
      {
        label: 'Retail Sales',
        data: salesData.map(d => Math.log10(d.wholesaleSales)),
        borderColor: '#46A8F6',
        backgroundColor: '#0070c9',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Wholesale Sales',
        data: salesData.map(d => Math.log10(d.unitsSold)),
        borderColor: '#9BA6BF',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className='bg-white rounded-sm p-8'>
      <h3 className='mb-6 text-lg text-slate-700'>
        Retail Sales
      </h3>
      <Line data={data} options={options} />
    </div>
  );
}


const options: ChartOptions<'line'> = {
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'month',
        tooltipFormat: 'MMM',  // Show only the month name in tooltips
        displayFormats: {
          month: 'MMM'         // Display only the month name on the x-axis
        }
      },
      grid: {
        display: false,  // Hide grid lines
      },
    },
    y: {
      grid: {
        display: false,  // Hide grid lines
      },
      ticks: {
        display: false,  // Hide labels
      },
      border: {
        display: false,  // Hide left border
      }
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
