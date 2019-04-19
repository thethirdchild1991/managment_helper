import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
import Nav from './Nav'
import Main from "./Main";
import NOPE from './NOPE'
import Auth from './Auth'

import '../App.css';



const routing = (
    <Router>      
      <Switch>
        <Route path='/' exact component={Main} />              
        <Route path='/auth' component={Auth} />
        <Route component={NOPE} />
      </Switch>
    </Router>
  )

class App extends Component {
  render() {
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




