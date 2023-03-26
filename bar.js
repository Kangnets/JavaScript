import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart() {
  const chartRef = React.useRef();
  const chartInstanceRef = React.useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [100, 7],
          backgroundColor: [
            '#181D62',
            'rgba(24,29,98, 0.7)'
          ],
          borderWidth: 0,
          scaleBeginAtZero: true,display: "block", height:"76px", width:"76px"
        }]
      },
    });
  }, []);

  return (
    <canvas
      id='myChart' 
      ref={chartRef}
    />
  );
}

export default DoughnutChart;
