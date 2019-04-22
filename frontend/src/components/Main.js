import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

import {guestContent} from '../configs/guestContentSettings'
import ProjectElem from './ProjectElem'
import ProjectsView from './ProjectsView'
import ProjectFormConfig from '../configs/ProjectFormConfig'
import SignInFormConfig from '../configs/SignInFormConfig'
import SignUpFormConfig from '../configs/SignUpFormConfig'
import CreateDeveloperFormConfig from '../configs/CreateDeveloperFormConfig'
import AppForm from './AppForm'
import {API} from '../configs/APISettings'

class Main extends Component{
    constructor(props){
        super(props);
        console.log('From main constructor')
        const authState = Boolean(localStorage.getItem('loggedIn'))
        this.state = {
            authState: authState,
            inited : false,
            data : [],
        };
    }

    contentOnState(){
        console.log('Main contentOnState: ',this.state)
        return  this.state.inited === true ?                                         
                    // this.state.data.map( elem => {                        
                    //     return (                            
                    //             // <ProjectElem mdata={elem.props} />                            
                    //             <ProjectsView data = {elem.props} />
                    //     );
                    // }) :                     
                    <ProjectsView data = {this.state.data}/>
                    :
                    guestContent.map( elem => {
                        return (
                        <li>
                            {elem.name}
                        </li>
                        )
                    });
    }

    componentDidMount(){        
        this.fetchProjects();
    }

    fetchProjects = param => {        
        fetch(API.selectAllProjects)
            .then(res => res.json())
            .then(
                    // data => console.log(data)
                    (res) => {  
                        console.log('Main Fetch Result: ', res);
                        if(res.length > 0)
                            this.setState({inited:true, data:res});
                        
                    },                
                    (error) => { console.log('error')}
            );
    }

    render(){        
        if(this.state.authState !== true){
            return <Redirect push to='/auth' />
        }
        return (
            
            
            <main id="main">
                <dv className="MainNavWrapper">
                   <nav>
                       <ul>
                           {this.state.data.map(elem => {
                               return (<li><a>{elem._id}</a></li>)
                           })}                           
                       </ul>
                    </nav> 
                </dv>
                      
                <div className="main">
                    {this.contentOnState()}
                    <div className="formWrapper">
                        <AppForm
                            id='ProjectForm'
                            mainClassName='ProjectForm'                    
                            additionalClassName=''
                            url={API.createProject}
                            proto={ProjectFormConfig} 
                            submitText="Save Project" 
                            submitHandler={this.fetchProjects}                
                            />                 
                        <AppForm
                            id='CreateDeveloper'                         
                            mainClassName='CreateDeveloper'
                            additionalClassName=''
                            url={API.createDeveloper}
                            proto={CreateDeveloperFormConfig}
                            submitText="Create" />
                    </div>
                </div>
                <dv className={'MainNavWrapper'}>
                   {/* <nav>
                       <ul>
                           <li><a href="/">First</a></li>
                           <li><a href="/">Second</a></li>
                           <li><a href="/">Third</a></li>
                           <li><a href="/">Fourth</a></li>
                       </ul>
                    </nav>  */}
                </dv>
            </main>
            
        );
    }    
}
export default Main;