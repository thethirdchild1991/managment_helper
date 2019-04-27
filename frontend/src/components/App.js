import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {API} from '../configs/APISettings'
import Header from './Header'
import Footer from './Footer';
import Nav from './Nav'
import Main from "./Main";
import NOPE from './NOPE'
import Auth from './Auth'
import ProjectView from './ProjectView'
import editUserFormConfig from '../configs/editUserFormConfig'
import editProjectFormConfig from '../configs/editProjectFormConfig'

import '../App.css';

class App extends Component {
  constructor(props){
    super(props)  
    const loggedState = Boolean(localStorage.getItem('loggedIn')) 

    this.state = {
      authState : loggedState ? loggedState : false,
    }    
        
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route 
            exact 
            path='/' 
            render={ () => <><Nav /><Main /></> }
          />
          <Route 
            path='/index' 
            render={ () => <><Nav /><Main /></> }
          />
          <Route 
            path='/auth' 
            component={Auth} 
          />
          <Route 
            exact 
            path='/project/:id' 
            render = { (param) => <ProjectView 
                                    data={param} 
                                    path={{
                                            fetch : API.selectProject,
                                            edit : API.updateProject,
                                            delete : API.delenpmteProject,
                                          }}
                                    proto={editProjectFormConfig}
                                  /> }              
          />
          <Route 
            exact 
            path='/user/:id' 
            render = { (param) => <ProjectView 
                                    data={param} 
                                    path={{
                                            fetch : API.selectUser,
                                            edit : API.updateUser,
                                            delete : API.deleteUser,
                                          }}
                                    proto={editUserFormConfig}
                                    /> }   
          />
          <Route component={NOPE} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;




