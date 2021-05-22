import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ResponsiveEmbed } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Total from "./components/Total";
import ReactLogo from "./india.svg";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import A from "./components/A";
import Listview from "./components/Listview";
import Graph from "./components/Graph";
import Symptoms from "./components/Symptoms";

function App() {
  const [detail, setdata] = useState([]);
  const [first, setFirst] = useState({});
  const [count, setCount] = useState(0);
  const [state, setstate] = useState("Total");

  // useEffect(() => {
  //   const fec = async () => {
  //     await fetch("https://api.covid19india.org/data.json").then((response) =>
  //       response.json()
  //     );
  //   };
  //   fec();
  // });
  useEffect(async () => {
    // const data2 = detail.find((d) => d.s == state);
    let data2;
    detail.map((d) => {
      if (d.s == state) {
        data2 = d;
      }
    });
    setData(data2);
    // console.log(data2);
  });
  useEffect(() => {
    const getcoviddata = async () => {
      await fetch("https://api.covid19india.org/data.json")
        .then((response) => response.json())
        .then((d) => {
          const my = d.statewise.map((info) => ({
            s: info.state,
            a: info.active,
            c: info.confirmed,
            r: info.recovered,
            ri: info.deltarecovered,
            n: info.deltaconfirmed,
            di: info.deltadeaths,
            d: info.deaths,
            time: info.lastupdatedtime,
          }));
          setdata(my);
          setFirst(my[0]);
          // console.log("yooooo>>>", my);
        });
    };
    getcoviddata();
  }, []);
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <h3 className="title">🔴 | Covid-19 | India Tracker|😷 </h3>

        {/* {
        (count==0)?<Total  p={first}  />:<Total  p={data}  />
        
      } */}
        {data ? (
          <>
            <h4 className="whitee my-5">
              {data.s}
              <br />
              [Last-Updated {data.time}]
            </h4>
            <Total p={data} />
          </>
        ) : (
          ""
        )}
        {/* <Total p={data} /> */}

        <A st={detail} setstate={setstate} />
        <Graph data={detail} only={first} />
        {/* <Map /> */}
        <Symptoms />
        <Listview data={detail} />
        <div className="blockquote-footer my-5"><u>Made and Design by Nisarg 🚀</u></div>
        <footer className="blockquote-footer">
          The information provided by this website is for general informational
          purposes only. All the data on the site shown is fetched from an {" "} 
           <a href="https://github.com/covid19india/api"><cite title="Source Title">Open source API</cite></a> ...... <a href="https://www.covid19india.org/">covid19india.org</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
