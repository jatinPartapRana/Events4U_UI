import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/HeaderComponent/NavBar';
import LoginComponent from './components/SignInComponent/LoginComponent';
import JobPartPage from './JobPartPage/jobPartPage.jsx';
import HomePage from './homepage/homePage';
import ConfirmOrder from './components/confirmOrderPage/confirmOrder';
import Output from './components/OutputPage/output';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar></NavBar> */}
        <Switch>
          <Route>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/companyx' component={()=>{
              window.location.href = 'http://ec2-75-101-236-93.compute-1.amazonaws.com:1337/';
              return null;
            }} />
            <Route exact path='/companyy' component={()=>{
              window.location.href = 'http://54.205.229.97:1337/';
              return null;
            }} />
            <Route exact path='/companyz' component={JobPartPage} />
            <Route exact path='/login/:jobName/:partId/:qty' component={LoginComponent} />  
            <Route exact path = '/confirmOrder/:jobName/:partID/:qty/:userEmailId' component={ConfirmOrder} />
            <Route exact path = '/order' render={<Output {...this.props}/>} />
          </Route>
        </Switch>
      </div>
    );
  }

}

export default App;
