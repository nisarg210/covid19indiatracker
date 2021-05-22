import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import './tile.css'

function Tile(props) {
  const {p,state,f}=props;
  const [back, setback] = useState([]);

  const changecolor = (e) => {
    const id = e.target.id;
    if (id == "Recovered") setback(["warning", "shadow"]);
    if (id == "Active") setback(["primary", "shadow"]);
    if (id == "New") setback(["danger ", "shadow"]);
    if (id == "Death") setback(["light", "shadow"]);
  };
  
  const commaNumber = require("comma-number");

  const check=(val)=>{
    if(val==0 ||isNaN(val))
    return false
    else
    return true
  }
  const checkcolor=(val)=>{
    if(val=="New")
    return "❤️"
    if(val=="Active")
    return "💙"
    if(val=="Recovered")
    return "💚"
    if(val=="Death")
    return "🖤" 
  }
  return (
    <div>
      <Card
        className={`custom-bg ${back[1]} mx-auto my-2`}
        text="white"
        border={back[0]}
      >
        <Card.Body>
          <Card.Text
            id={props.name}
            onMouseOver={changecolor}
            onMouseOut={() => {
              setback("");
            }}
          >
            {props.name}
            <br></br>
            <span className="inc">
              {"  "}
              {check(props.ince)?"+"+commaNumber(props.ince):(checkcolor(props.name)) }
            </span>
            <br />
            <span className="total">Total : {commaNumber(props.data)}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tile;
