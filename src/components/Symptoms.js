import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./symptoms.css";
import { Accordion, Badge, Card, Button } from "react-bootstrap";

function Symptoms() {
  return (
    <div className="App">
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Covid 19 Symptoms ⬇ 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="sys">
              <span>
                People may be sick with the virus for 1 to 14 days before
                developing symptoms. The most common symptoms of coronavirus
                disease (COVID-19) are fever, tiredness, and dry cough. Most
                people (about 80%) recover from the disease without needing
                special treatment. More rarely, the disease can be serious and
                even fatal. Older people, and people with other medical
                conditions (such as asthma, diabetes, or heart disease), may be
                more vulnerable to becoming severely ill.
              </span>
              People may experience:
              <ul>
                <li>
                  <strong>cough</strong>
                </li>
                <li>
                  <strong>fever</strong>
                </li>
                <li>
                  <strong>tiredness</strong>
                </li>
                <li>
                  <strong>difficulty breathing (severe cases)</strong>
                </li>
              </ul>
              <Button
                variant="outline-danger"
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=symptoms"
                target="_blank"
              >
                Learn more
              </Button>
              <br/>
              <br/>
              <br/>
              <span>
                There is no specific medicine to prevent or treat coronavirus
                disease (COVID-19). People may need supportive care to help them
                breathe. If you have mild symptoms, stay at home until you’ve
                recovered.
              </span>
              You can relieve your symptoms if you:
              <ul>
                <li>rest and sleep</li>
                <li>keep warm</li>
                <li>drink plenty of liquids</li>
                <li>
                  use a room humidifier or take a hot shower to help ease a sore
                  throat and cough
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Symptoms;
