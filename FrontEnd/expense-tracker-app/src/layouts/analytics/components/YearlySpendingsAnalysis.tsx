import { Chart, ChartConfiguration } from "chart.js";
import { useEffect, useRef } from "react";

const YearlySpendingsAnalysis: React.FC<{ yearlySpendings: { [year: string]: string } }> = (props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  let labels: string[] = [];
  let values: number[] = [];

  for (var c in props.yearlySpendings) {
    labels.push(c);
    values.push(Number.parseFloat(props.yearlySpendings[c]));
  }

  useEffect(() => {
    if (chartRef.current) {
      const data = {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: '#5f3dc4',
          borderColor: '#212529',
          borderWidth: 1,
        }],
      };

      const options = {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Total expenses',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      };

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: options,
        });
        return () => myChart.destroy();
      }
    }
  }, []);
  return (
    <div className="col-md-6 text-center align-self-start my-5 chartarea mt-md-5 mx-md-3 ms-xxl-0 me-xxl-0" style={{ borderRadius: '6px', border: '1px solid var(--bs-body-bg)', maxWidth: '933px', width: '100%' }}>
      <h3 className="fw-bold my-3 mx-3" style={{ color: 'var(--bs-body-bg)' }}>Yearly Spending Analysis</h3>
      <div>
        <canvas className="m-5 p-5" ref={chartRef} width="400" height="200" />
      </div>
    </div>
  )
}

export default YearlySpendingsAnalysis;