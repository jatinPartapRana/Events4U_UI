import React, {Component}  from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import NavBar from '../HeaderComponent/NavBar';

class OutputCard extends Component{
  render(){
  const status= this.props.result === "Success"? 
                <h5 className="display-4 text-success">{this.props.result}</h5>:
                <h5 className="display-4 text-danger">{this.props.result}</h5>;
                console.log("Reson rESULT"+this.props.reason ==="");
    return (
          <div>
          <ReactBootStrap.Card style={{ width: '30rem', boxShadow:"0 4px 5px #ccc", borderRadius:"10px", textAlign:'left', paddingLeft:'20px' }}>
          
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Text><strong>Order Status: </strong>{status}</ReactBootStrap.Card.Text>
            {
              this.props.reason === "Success" ? <ReactBootStrap.Card.Text><strong>Order Successfully placed</strong></ReactBootStrap.Card.Text>: <ReactBootStrap.Card.Text><strong>Reason: </strong>{this.props.reason}</ReactBootStrap.Card.Text>
            }
            <ReactBootStrap.Card.Text><strong>Job Name: </strong>{this.props.jobName}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Part Id: </strong>{this.props.partId}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Quantity: </strong>{this.props.qty}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>User Id: </strong>{this.props.userId}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Order Date: </strong>{this.props.date}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Order Time: </strong>{this.props.time}</ReactBootStrap.Card.Text>
            
          
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
          </div>
    )
  }
}

export default withRouter(OutputCard);