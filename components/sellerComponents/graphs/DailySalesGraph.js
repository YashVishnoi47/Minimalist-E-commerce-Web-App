import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DailySalesGraphs = () => {
  const salesData = [
    { date: "2025-03-16", sales: 150 },
    { date: "2025-03-17", sales: 200 },
    { date: "2025-03-18", sales: 180 },
    { date: "2025-03-19", sales: 220 },
    { date: "2025-03-20", sales: 170 },
    { date: "2025-03-21", sales: 190 },
    { date: "2025-03-22", sales: 250 },
  ];
  const data = {
    labels: salesData.map((item) => item.date), // X-axis: dates
    datasets: [
      {
        label: "Daily Sales",
        data: salesData.map((item) => item.sales), // Y-axis: sales numbers
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.2, // Smooth curve
        pointRadius: 5, // Size of data points
        fill: true, // Fill area under the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Sales" } },
    },
  };

  return (
      <div className="w-full max-w-3xl h-[90%] p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl  border-gray-300 flex flex-col justify-center items-center gap-6">
      {/* Stylish Heading */}
      

      {/* Chart Container */}
      <div className="w-full h-[320px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DailySalesGraphs;
