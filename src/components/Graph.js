import React, { useEffect, useState } from "react";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import './graph.css'
function Graph(props) {
  const { data, only } = props;
  const [datachart, setdatachart] = useState({});
  const [piechart, setPiechart] = useState({});

  const getchart = () => {
    let states = [];
    let cases = [];
    for (const obj of data) {
      if (obj.s != "Total") {
        states.push(obj.s);
        cases.push(obj.c);
      }
    }

    setdatachart({
      labels: states,
      datasets: [
        {
          label: "cases",
          data: cases,
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          borderWidth: 4,
        },
      ],
    });
    // console.log(states, cases);
  };

  const getpiechart = () => {
    let condition = ["Confirmed", "Active", "Recovered", "Deaths"];
    let numbers = [];
    numbers.push(only.c);
    numbers.push(only.a);
    numbers.push(only.r);
    numbers.push(only.d);
    setPiechart({
      labels: condition,
      datasets: [
        {
          label: "cases",
          data: numbers,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(255, 159, 99)",
          ],
          hoverOffset: 2,
        },
      ],
    });
  };
  useEffect(() => {
    getchart();
    getpiechart();
  }, [props]);
  if (props) {
    return (
      <div className="App">
        <div className="bar">
          <Bar
            data={datachart}
            options={{
              responsive: true,
              legend: { display: false },
              minBarLength: 30,
              barThickness: 100,
            }}
          />
          </div>
          
          {/* <div className="pie my-2">
            <Doughnut
              data={piechart}

            />
          </div> */}
        </div>
      
    );
  }
}

export default Graph;
