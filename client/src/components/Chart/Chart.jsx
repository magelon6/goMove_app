import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";
const Chart2 = () => {

const price = useSelector((state => state.price))
const price2 = useSelector((state => state.price2))


  const lineChartData = {
    labels: price.slice(0, 12).map((el) => el.name),
    datasets: [
      {
        data: price.slice(0,12).map((el) => el.price),
        label: "firts city",
        borderColor: "green",
        fill: true,
        lineTension: 0.5
      },
      {
        data: price2.slice(0,12).map((el) => el.price*74),
        label: "second city",
        borderColor: "black",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5
      }
    ]
  };

  return (
    <>
    <center>

    <Line
      type="line"
      width={160}
      height={60}
      options={{
        // title: {
        //   display: true,
        //   text: "COVID-19 Cases of Last 6 Monthsewflwkfnwjebfwibfwbfbwefbewofbowebfowbfwofbwoefbwofowefjowf",
        //   fontSize: 20
        // },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={lineChartData}
      />
      </center>
      </>
  );
};
export default Chart2;
