import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const CategorySalesGraph = () => {
  const salesData = [
    { category: "Electronics", sales: 500 },
    { category: "Clothing", sales: 300 },
    { category: "Groceries", sales: 700 },
    { category: "Books", sales: 200 },
    { category: "Furniture", sales: 400 },
  ];
  const data = {
    labels: salesData.map((item) => item.category), // Categories as labels
    datasets: [
      {
        label: "Sales",
        data: salesData.map((item) => item.sales), // Sales data
        backgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
        ],
        hoverOffset: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="w-full max-w-lg h-[90%] p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl  border-gray-300 flex flex-col justify-center items-center gap-4">
      {/* Stylish Heading */}
      

      {/* Chart Container */}
      <div className="w-full h-[300px] flex justify-center items-center">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CategorySalesGraph;
