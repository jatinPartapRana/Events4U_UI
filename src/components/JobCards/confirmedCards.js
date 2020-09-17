import React, { Component }  from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import OutputCard from '../OutputPage/output';


class ConfirmCard extends Component {

    componentDidMount(){
        sessionStorage.setItem("LoggedIn", "true");
    }

    constructor(props){
        super();
    }
    state={
        msg:"",
        job:{
            jobName:"",
            partId:"",
            qty:"",
            time:"",
            date:"",
            result:"",
            userId:"",
            reason:""
        }
    }

    confirmEvent =  (e) =>{

        Axios.post('http://54.86.125.185:3000/jobs', {
            
            userName: this.props.userName,
             jobName: this.props.jobName,
             partId: this.props.partId,
             qty: this.props.qty, 
          })
          .then(res => {
              console.log('Result')
              console.log("Confirm Card Page: "+sessionStorage.getItem("LoggedIn"))
                console.log(JSON.stringify(res.data))
               if(res.data.Status === "Success")
               {
                    const jobDetails = {...this.state.job};
                    console.log("Before: "+jobDetails);
                    jobDetails.jobName=res.data.jobName;
                    jobDetails.partId=res.data.partId;
                    jobDetails.qty=res.data.qty;
                    jobDetails.time=res.data.time;
                    jobDetails.date=res.data.date;
                    jobDetails.result=res.data.Status;
                    jobDetails.userId=res.data.userId;
                    sessionStorage.setItem("userId",res.data.userId);
                    jobDetails.reason="Success";
                    console.log("after: "+jobDetails);
                   this.setState({
                        job:jobDetails,
                        msg:"success"
                    })
                   console.log('+++++++++')
                   console.log("Message"+this.state.job)
               }

               else
               {
                    const jobDetails = {...this.state.job};
                    jobDetails.jobName=res.data.jobName;
                    jobDetails.partId=res.data.partId;
                    jobDetails.qty=res.data.qty;
                    jobDetails.time=res.data.time;
                    jobDetails.date=res.data.date;
                    jobDetails.result=res.data.Status;
                    jobDetails.userId=res.data.userId;
                    sessionStorage.setItem("userId",res.data.userId);
                    jobDetails.reason=res.data.Reason;
                    console.log(jobDetails.msg)
                    this.setState({ 
                        job:jobDetails,
                        msg:"Failed"
                     })
                    console.log('+++++++++')
                    console.log("Message"+this.state.jobDetails)
               }
          })
          .catch(err => {
              console.log(err);
          })

        // this.props.history.push(`/order/${this.props.jobName}/${this.props.partId}/${this.props.qty}`)
      }

    render()
    {
        // console.log(this.state.job)
        const jobs = {...this.state.job};


        let displayCard= this.state.msg === "" ?
                        (<ReactBootStrap.Card style={{ width: '30rem', boxShadow:"0 4px 5px #ccc", borderRadius:"10px" }}>
                        <ReactBootStrap.Card.Body>
                         
                          <ReactBootStrap.Card.Text><strong>Job Name: </strong>{this.props.jobName}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Card.Text><strong>Part Id: </strong>{this.props.partId}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Card.Text><strong>Quantity: </strong>{this.props.qty}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Card.Text><strong>User Id: </strong>{this.props.userName}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Button variant="primary"  onClick = {this.confirmEvent}>Confirm Order</ReactBootStrap.Button>
                        </ReactBootStrap.Card.Body>
                      </ReactBootStrap.Card>)
                      :
                        (<OutputCard 
                              jobName={jobs.jobName} 
                              partId={jobs.partId} 
                              qty={jobs.qty} 
                              userId={jobs.userId} 
                              date={jobs.date} 
                              time={jobs.time}
                              result={jobs.result}
                              reason={jobs.reason} />);
                          
                    // console.log("state:"+jobs[0].jobName)
return (
        // this.state.msg === ""?
        <div>
            {displayCard}
        </div>

)}};

export default withRouter(ConfirmCard);