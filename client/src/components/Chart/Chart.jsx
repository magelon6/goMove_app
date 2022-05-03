import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";

const Chart = () => {
  const price = useSelector((state => state.price))
const price2 = useSelector((state => state.price2))

  const barChartData = {
    labels: price.slice(0, 7).map((el) => el.name),

    datasets: [
      {
        data: price.slice(0,7).map((el) => el.price),
        label: "Infected People",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true
      },
      {
        data: price2.slice(0,7).map((el) => el.price*74),
        label: "Deaths People",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true

      }
    ]
  };


  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15
        },

        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}

      data={barChartData}
    />
  );
  return barChart;
};

export default Chart;

