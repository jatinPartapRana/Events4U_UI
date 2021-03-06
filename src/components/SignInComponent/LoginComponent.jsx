import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import NavBar from '../HeaderComponent/NavBar';

class LoginComponent extends Component {
  constructor(props){
      super();
      this.state = {
            userEmailId:"",
            userPassword:"",
            param1:"",
            param2:"",
            param3:""
      }
  }

  componentWillMount() {
    const param=[this.props.match.params];
    Object.keys(param)
            .map(pKey => {
              return [...Array(param[pKey])]
              .map((i,j)=>{
                this.setState({
                  param1:i.partId,
                  param2:i.jobName,
                  param3:i.qty
                })
                return true;
              })
            })
  }


  onEmailChange = (e) =>{
     this.setState({userEmailId: e.target.value}) 
  }

  onPasswordChange = (e) =>{
      this.setState({userPassword: e.target.value}) 
   }


   authCheck = (e) => {
    Axios.post('http://54.86.125.185:3000/login', {
      username: this.state.userEmailId,
      password: this.state.userPassword
    })
    .then(res => {
      console.log(res)
         if(res.data.message === "Success")
         {
          this.props.history.push(`/confirmOrder/${this.state.param2}/${this.state.param1}/${this.state.param3}/${this.state.userEmailId}`)
         }
         else
         {
           alert("Invalid User")
           this.props.history.push(`/`);
         }
    })
    .catch(err => {
        console.log(err);
    })
}


  onFormSubmit =  e => {
      e.preventDefault();
      this.authCheck();
  }

  render() {

    return (
      <center>
        <div>
          <NavBar/>
          <br/>
          <h1>Enter Login credentials</h1>
          <div style={{paddingTop: '6rem'}}>
          <ReactBootStrap.Card style={{width:'30rem', height:'18rem', borderRadius: '10px', boxShadow:'0 4px 5px #ccc', paddingTop:'20px'}}>
          <br/>
            <ReactBootStrap.Card.Body >
              <ReactBootStrap.Form onSubmit={this.onFormSubmit}>
              <ReactBootStrap.Form.Group controlId="formBasicEmail">
                <ReactBootStrap.Form.Control type="text" placeholder="Username" onChange={this.onEmailChange}/>
              </ReactBootStrap.Form.Group>
            
              <ReactBootStrap.Form.Group controlId="formBasicPassword">
                <ReactBootStrap.Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} />
              </ReactBootStrap.Form.Group>
              <ReactBootStrap.Button variant="primary" type="submit">
                LOGIN
              </ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Card.Body>

          </ReactBootStrap.Card>
          </div>

        </div>
      </center>
    );
  }
}



export default LoginComponent;