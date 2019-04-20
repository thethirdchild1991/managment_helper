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
    this.state = {
      authState : false,
    }
  

    this.routing = (


      <Router>      
        <Switch>
          <Route path='/' exact component={Main} />              
          <Route path='/auth'             
            component={
              () => <Auth  
                      authState={this.state.authState} 
                      authHandler={this.authHandler}
                    />
            }            
          />
          <Route component={NOPE} />
        </Switch>
      </Router>
    )
  }

  authHandler = authState => {
    console.log('From App Auth state: ', authState)
    this.setState({'authState' : authState }, () =>{console.log('App state: ', this.state)})
  }



  render() {

    let routing;

    if(this.state.authState === true){
      routing = <></>      
    }else{
      routing =(
        <Router>      
        <Switch>
          <Route path='/' exact component={Main} />              
          <Route path='/auth'             
            component={
              () => <Auth  
                      authState={this.state.authState} 
                      authHandler={this.authHandler}
                    />
            }            
          />
          <Route component={NOPE} />
        </Switch>
      </Router>
      )
    }

    console.log( this.state.authState )

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




