import React from "react";
import {Bar} from "react-chartjs-2";
// import { Chart as ChartJS } from 'chart.js/auto'
import {useSelector} from "react-redux";

const Chart4 = () => {
  const price = useSelector((state => state.currencyPrice))
  const price2 = useSelector((state => state.currencyPrice2))
  const city1 = useSelector((state) => state.lineFrontCity)
  const city2 = useSelector((state) => state.lineFrontCity)
  const setCurrency = useSelector((state) => state.currentCurrency)

  function rent (arr) {
    return arr.map(el=>{
      const name = el.name.split(",")
      const label = name.pop().trim()
      const newEl = {id:el.id, name:name.join(", "), label, price:el.price}
      return newEl
    }).filter((el) => el.label === 'Rent Per Month')
  }
  


  const barChartData = {
    labels: rent(price).map(el=>el.name), 
    datasets: [
      {
        data: (rent(price)).map((el) => el.price),
        label: city1.city1,
        borderColor: "#3333ff",
        backgroundColor: "rgba(255, 183, 3, 0.5)",
        fill: true,
        borderWidth: 2,
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        data: (rent(price2)).map((el) => el.price),
        label: city2.city2,
        borderColor: "#ff3333",
        backgroundColor: "rgba(33, 158, 188, 0.5)",
        fill: true,
        borderWidth: 2,
        borderRadius: 20,
        borderSkipped: false,

      }
    ]
  };
=======
    const price = useSelector((state => state.currencyPrice))
    const price2 = useSelector((state => state.currencyPrice2))
    const city1 = useSelector((state) => state.lineFrontCity)
    const city2 = useSelector((state) => state.lineFrontCity)
    const setCurrency = useSelector((state) => state.currentCurrency)


    const barChartData = {
        labels: price.slice(21, 28).map((el) => el.name),
        datasets: [
            {
                data: price.slice(0, 7).map((el) => el.price),
                label: city1.city1,
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true
            },
            {
                data: price2.slice(0, 7).map((el) => el.price),
                label: city2.city2,
                borderColor: "#ff3333",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true

            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: ` Rent Per Month, ${setCurrency} `,
              font: {
                size:20
              }          

            }

            data={barChartData}
        />
    );
    return barChart;
};


export default Chart4;

