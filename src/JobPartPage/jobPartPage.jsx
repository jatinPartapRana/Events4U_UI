import React, { Component } from "react";
import Axios from 'axios';
import JobCards from '../components/JobCards/JobCards.jsx';
import { Container, Row, Col } from "react-bootstrap";
import NavBar from '../components/HeaderComponent/NavBar';

class JobPartPage extends Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            inputSearchData: "",
            showDetails: false
        }
    }
    componentDidMount() {
        //   fetch("http://ec2-75-101-236-93.compute-1.amazonaws.com:1337/jobs")
        //     .then(response => {
        //       console.log(response.json())
        //       response.json()})
        //     .then(filteredJobs => this.setState({ jobs: filteredJobs })) 
        //     .catch(error => console.log("exception"));
        Axios.get('http://ec2-75-101-236-93.compute-1.amazonaws.com:1337/jobs')
            .then(res => {
                this.setState({ jobs: res.data });
                console.log("Company Z "+sessionStorage.getItem("LoggedIn"))
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }



    inputEvent = e => {
        console.log('Event' + e.target.value);
        e.preventDefault();
        this.setState({ inputSearchData: e.target.value });
    }

    render() {

        const jobsFiltered = this.state.jobs.filter(job =>
            job.jobName.toLowerCase().includes(this.state.inputSearchData.toLowerCase())
        );
        return (
            <div>
                <NavBar/>
                <h1>Welcome to Company Z</h1>
                <i class="fas fa-search"></i>&nbsp;
                <input type="search" placeholder="Search a job" onChange={this.inputEvent}/>
                <Container>
                    <Row>
                       
                            {jobsFiltered.map(job => (
                                 <Col lg={4} md={6} sm={12} xs={12}>
                                <JobCards jobName={job.jobName} partId={job.partId} qty={job.qty} ></JobCards>
                            </Col>
                            ))}
                       

                    </Row>
                    <br/>
                </Container>

            </div>
        );
    }
}

export default JobPartPage;