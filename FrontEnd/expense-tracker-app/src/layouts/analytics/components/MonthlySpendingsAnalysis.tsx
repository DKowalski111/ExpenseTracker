import Chart, { ChartConfiguration } from "chart.js/auto";
import { useEffect, useRef } from "react";

const MonthlySpendingsAnalysis: React.FC<{ monthlySpending: { [month: string]: string } }> = (props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  let labels: string[] = [];
  let values: number[] = [];

  for (var c in props.monthlySpending) {
    labels.push(c);
    values.push(Number.parseFloat(props.monthlySpending[c]));
  }

  const convertToSortableDate = (label: string) => {
    const parts = label.split(' ');
    const month = parseInt(parts[0]);
    const year = parseInt(parts[1]);
    return new Date(year, month - 1);
  };

  const sortedData = labels.map((label, index) => ({ label, value: values[index] }));
  sortedData.sort((a, b) => convertToSortableDate(a.label).getTime() - convertToSortableDate(b.label).getTime());

  labels = sortedData.map(item => item.label);
  values = sortedData.map(item => item.value);


  useEffect(() => {
    if (chartRef.current) {
      const data = {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: '#a61e4d',
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
      <h3 className="fw-bold my-3 mx-3" style={{ color: 'var(--bs-body-bg)' }}>Monthly Spending Analysis</h3>
      <div>
        <canvas className="m-5 p-5" ref={chartRef} width="400" height="200" />
      </div>
    </div>
  );
}

export default MonthlySpendingsAnalysis;