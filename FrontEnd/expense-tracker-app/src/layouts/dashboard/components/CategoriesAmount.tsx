import Chart, { ChartConfiguration } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
const CategoriesAmount: React.FC<{ categoriesAmount: { [category: string]: string }, totalExpenses: number }> = (props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  let labels: string[] = [];
  let values: number[] = [];

  for (var l in props.categoriesAmount) {
    labels.push(l);
    values.push(Number.parseFloat(props.categoriesAmount[l]));
  }

  useEffect(() => {
    if (chartRef.current) {
      const data = {
        labels: labels,
        datasets: [{
          label: 'Total expenses',
          data: values,
          backgroundColor: ['#a61e4d', '#862e9c', '#5f3dc4', '#364fc7', '#1864ab', '#0b7284', '#087f5b', '#2b8a3e', '#5c940d'],
          borderColor: '#212529',
          borderWidth: 6,
        }],
      };


      const options: ChartConfiguration<'doughnut'>['options'] = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      };

      const innerLabel = {
        id: 'innerLabel',
        afterDatasetDraw(chart: { data?: any; ctx?: any; }, args: { meta: any; }, pluginOptions: any) {
          const { ctx } = chart;
          const meta = args.meta;
          const xCoor = meta.data[0].x;
          const yCoor = meta.data[0].y;
          const perc = chart.data.datasets[0].data[0] / meta.total * 100;
          ctx.save();
          ctx.textAlign = 'center';
          ctx.fillStyle = '#fffff2';
          ctx.font = '32px sans-serif';
          ctx.fillText("$" + props.totalExpenses, xCoor, yCoor);
          ctx.restore();
        },
      };



      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'doughnut',
          plugins: [innerLabel],
          data: data,
          options: options,
        });
        return () => myChart.destroy();
      }
    }
  }, []);

  return (
    <div className="container d-lg-flex justify-content-lg-center">
      <div className="col-md-6 text-center align-self-start my-5 chartarea mt-md-5 mx-md-3 ms-xxl-0 me-xxl-0" style={{ borderRadius: '6px', border: '1px solid var(--bs-body-bg)', maxWidth: '933px', width: '100%' }}>
        <h3 className="fw-bold my-3 mx-3" style={{ color: 'var(--bs-body-bg)' }}>Expense Category Distribution</h3>
        <div><canvas className="m-5 p-5" ref={chartRef} width="400" height="200"></canvas></div>
      </div>
    </div>
  );
}

export default CategoriesAmount;