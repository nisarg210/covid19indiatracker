import React from "react";
import { Table } from "react-bootstrap";
// import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listview.css";

function Listview(props) {
  const { data } = props;
  const commaNumber = require("comma-number");
  if (props) {
    return (
      <div className="App tablec my-5 py-5">
        <Table className="tablec" bordered hover  responsive="sm">
          <thead>
            <tr>
              <th id="Name">State/UT</th>
              <th id="Newt">Confirmed</th>
              <th id="Activet">Active</th>
              <th id="Recoveredt">Recovered</th>
              <th id="Deatht">Deaths</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.s}>
                <td className="row_name">{item.s}</td>
                <td id="Newtab" className="row_data">{commaNumber(item.c)}</td>
                <td id="Activetab"className="row_data">{commaNumber(item.a)}</td>
                <td id="Recoveredtab"className="row_data">{commaNumber(item.r)}</td>
                <td id="Deathtab" className="row_data">{commaNumber(item.d)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Listview;
