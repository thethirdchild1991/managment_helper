import React, {Component} from 'react'
import {guestContent} from './guestContentSettings'
import ProjectElem from './ProjectElem'
import ProjectsView from './ProjectsView'
import ProjectForm from './ProjectForm'
import ProjectFormConfig from './ProjectFormConfig'

// const APIAddr = 'https://swapi.co/api/people/1'
const APIAddr = 'http://localhost:5000'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            inited : false,
            data : [],
        };
    }

    contentOnState(){
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
        fetch(APIAddr)
            .then(res => res.json())
            .then(
                    // data => console.log(data)
                    (res) => {                        
                        this.setState({inited:true, data:res});
                        // console.log(this.state.data);
                    },                
                    (error) => { console.log('error')}
            );
    }

    render(){
        return (
            <main id="main">
                {/* {this.contentOnState()} */}
                <ProjectForm 
                            proto={ProjectFormConfig} 
                            submitText="Save Project" />
            </main>
        );
    }    
}
export default Main;