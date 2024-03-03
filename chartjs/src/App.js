import React from "react";
import { defaults } from "chart.js/auto";
// import { defaults } from "chart.js" ;
import "./App.css";
import LineChart from "./components/LineChart";
import DoughnutChart from "./components/DoughnutChart";
import BarChart  from "./components/BarChart";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function App() {
  const [selectedChart, setSelectedChart] = useState("all");

  const exportChartsToPDF = () => {
    const dashboardElement = document.querySelector(".App"); // Select the main dashboard container
    const pdf = new jsPDF("l", "mm", "a4");

    html2canvas(dashboardElement).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const imageHeight = (canvas.height * 200) / canvas.width; // A4 size paper
      pdf.addImage(imageData, "PNG", 0, 0, 208, imageHeight);
      pdf.save("dashboard.pdf");
    });
  };

  // const exportChartsToPDF = () => {                     // 1st conert image and then pdf
  //   const chartElements = document.querySelectorAll('.dataCard');
  //   const pdf = new jsPDF('p', 'mm', 'a4');

  //   chartElements.forEach((chartElement, index) => {
  //     html2canvas(chartElement).then((canvas) => {
  //       const imageData = canvas.toDataURL('image/png');
  //       const imageHeight = (canvas.height * 208) / canvas.width; // A4 size paper
  //       pdf.addImage(imageData, 'PNG', 0, 0, 208, imageHeight);
  //       if (index !== chartElements.length - 1) {
  //         pdf.addPage();
  //       } else {
  //         pdf.save('dashboard.pdf');
  //       }
  //     });
  //   });
  // };
  return (
    <>
      <div className="App">
        <select
          value={selectedChart}
          onChange={(e) => setSelectedChart(e.target.value)}
        >
          <option value="line">Line Chart</option>
          <option value="doughnut">Doughnut Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="all">All Charts</option>
        </select>
      </div>

      <div className="dataCard revenueCard">
        {(selectedChart === "line" || selectedChart === "all") && <LineChart />}
      </div>

      <div className="row">
        <div className="dataCard customerCard">
          {(selectedChart === "doughnut" || selectedChart === "all") && (
            <DoughnutChart />
          )}
        </div>

         <div className="row">   
        <div className="col dataCard categoryCard">
          {(selectedChart === "bar" || selectedChart === "all") && (
            <BarChart />
          )}
        </div>
        </div> 
      </div>

      <div className="btn">
        <button onClick={exportChartsToPDF}>Export to PDF</button>
      </div>
    </>
  );
}

export default App;