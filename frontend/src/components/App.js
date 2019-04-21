import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
import Nav from './Nav'
import Main from "./Main";
import NOPE from './NOPE'
import Auth from './Auth'

import '../App.css';





class App extends Component {
  constructor(props){
    super(props)  
    const loggedState = Boolean(localStorage.getItem('loggedIn')) 

    this.state = {
      authState : loggedState ? loggedState : false,
    }    
    console.log('From App constructor')
  }

  render() {

    const routing = 
      <Router>
          <Switch>
            <Route exact path='/' render={ () =>
              <><Nav /><Main /> </>
            }/>
            <Route path='/index' render={ () =>
              <><Nav /><Main /></>
            }/>
            <Route path='/auth' component={Auth} />
            <Route component={<h1>NOPE</h1>} />
          </Switch>
      </Router>

    

    return (
      <>
        <Header />                  
        {routing}
        <Footer />           
      </>      
    );
  }
}

export default App;




