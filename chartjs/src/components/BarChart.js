import React from "react";
import { Bar } from "react-chartjs-2";
import revenueData from "../data/revenueData.json";

const BarChart = () => {
  return (
    <Bar
      data={{
        labels: revenueData.map((data) => data.label),
        datasets: [
          {
            label: "Revenue",
            data: revenueData.map((data) => data.revenue),
            backgroundColor: [
              "rgba(500, 3, 45 , 0.8)",
              "rgba(11, 7, 300, 0.8)",
              "rgba(420, 19 ,700, 0.8)",
            ],
            borderRadius: 5,
          },
          {
            label: "Cost",
            data: revenueData.map((data) => data.cost),
            backgroundColor: [
              "rgba(500, 3, 45 , 0.8)",
              "rgba(11, 7, 300, 0.8)",
              "rgba(420, 19 ,700, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Bar Chart",
          },
        },
      }}
    />
  );
};

export default BarChart;
