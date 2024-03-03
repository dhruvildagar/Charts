import React from "react";
import { Doughnut } from "react-chartjs-2";
import revenueData from "../data/revenueData.json";

const DoughnutChart = () => {
  return (
    <Doughnut
      data={{
        labels: revenueData.map((data) => data.label),
        datasets: [
          {
            label: "Revenue",
            data: revenueData.map((data) => data.revenue),
            backgroundColor: [
              "rgba(450, 34, 29 , 0.8)",
              "rgba(51, 620, 42, 0.8)",
              "rgba(4, 13, 190, 1)",
            ],
            borderColor: [
              "rgba(45, 34, 29 , 0.8)",
              "rgba(51, 62, 42, 0.8)",
              "rgba(4, 13 19, 1)",
            ],
          },
          {
            label: "Cost",
            data: revenueData.map((data) => data.cost),
            backgroundColor: [
              "rgba(450, 34, 29 , 0.8)",
              "rgba(51, 620, 42, 0.8)",
              "rgba(4, 13, 190, 1)",
            ],
            borderColor: [
              "rgba(45, 34, 29 , 0.8)",
              "rgba(51, 62, 42, 0.8)",
              "rgba(4, 13 19, 1)",
            ],
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Doughnut Chart",
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
