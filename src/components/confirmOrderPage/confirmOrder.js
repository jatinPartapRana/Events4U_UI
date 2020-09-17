import React, { Component } from 'react';
import ConfirmedCardView from '../JobCards/confirmedCards';
import NavBar from '../HeaderComponent/NavBar';

export default class ConfirmOrder extends Component {


    render() {
        const param=[this.props.match.params];
        const card=Object.keys(param)
              .map(pKey => {
                return [...Array(param[pKey])]
                .map((job,j)=>{
            
                  return <ConfirmedCardView key={job.jobName} jobName={job.jobName} partId={job.partID} qty={job.qty} userName = {job.userEmailId}/>;
                })
              })
        
        return (
            <div>
                <NavBar/>
                <center>
                    <h2 className="display-4 mt-5" >Order Information</h2>
                    {card}
                </center>
            </div>
        )
    }
}