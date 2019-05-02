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
import {projectKeys} from '../configs/projectTableConfig'
import {userKeys} from '../configs/userTableConfig'

import '../App.css';
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  constructor(props){
    super(props)  
    const loggedState = localStorage.getItem('loggedIn')    

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
                                    dataKeys={projectKeys}
                                    path={{
                                            fetch : API.selectProject,
                                            edit : API.updateProject,
                                            delete : API.deleteProject,
                                          }}
                                    proto={editProjectFormConfig}
                                    showDetails={true}
                                    editPermition={'editProject'}
                                  /> }              
          />
          <Route 
            exact 
            path='/user/:id' 
            render = { (param) => <ProjectView 
                                    data={param} 
                                    dataKeys={userKeys}                                    
                                    path={{
                                            fetch : API.selectUser,
                                            edit : API.updateUser,
                                            delete : API.deleteUser,
                                          }}
                                    proto={editUserFormConfig}
                                    showDetails={false}
                                    editPermition={'editRole'}
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




