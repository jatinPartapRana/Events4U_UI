import React  from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const JobCards = (props) => (
        <div className="App">
          <br/>
        <ReactBootStrap.Card  className="App">

        <ReactBootStrap.Card.Body>
         
          <ReactBootStrap.Card.Text><strong>Job Name: </strong>{props.jobName}</ReactBootStrap.Card.Text>
          <ReactBootStrap.Card.Text><strong>Part Id: </strong>{props.partId}</ReactBootStrap.Card.Text>
          <ReactBootStrap.Card.Text><strong>Quantity: </strong>{props.qty}</ReactBootStrap.Card.Text>
          <ReactBootStrap.Button 
            variant="primary" 
            onClick= {() => {
              {sessionStorage.getItem("LoggedIn")==="true"
              ?
              props.history.push(`/confirmOrder/${props.jobName}/${props.partId}/${props.qty}/${sessionStorage.getItem("userId")}`):
              props.history.push(`/login/${props.jobName}/${props.partId}/${props.qty}`)
              }
            }}>
              Order Now</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
        </div>
);

export default withRouter(JobCards);