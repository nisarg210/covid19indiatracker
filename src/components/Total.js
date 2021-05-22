import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Tile from "./Tile";

export default function Total(props) {

  if (props) {
    return (
      <div className="my-5 App">
       
        <Container className="mb-5">
          <Row>
            <Col sm>
              
              <Tile name="New" ince={props.p.n} data={props.p.c} />
            </Col>
            <Col sm>
            <Tile name="Active"  data={props.p.a}/>
            </Col>
            <Col sm>
            <Tile name="Recovered" ince={props.p.ri} data={props.p.r}/>
            </Col>
            <Col sm>
            <Tile name="Death" ince={props.p.di} data={props.p.d}/>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
