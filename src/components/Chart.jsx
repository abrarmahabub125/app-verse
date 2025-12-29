import { Bar } from "react-chartjs-2";
import "./ChartConfig";

const Chart = ({ reviews }) => {
  const data = {
    labels: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
    datasets: [
      {
        label: "Ratings",
        data: reviews,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      x: {
        min: 100,
        max: 5000,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
