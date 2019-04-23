import React, {Component} from 'react'

import {API} from '../configs/APISettings'

class ProjectView extends Component{
    constructor(props){
        super(props)
        this.state={
            data : {}
        }
    }

    componentDidMount(){
        if( this.props.data ){
            const { match: { params } } = this.props.data;
        
            fetch(
                    API.selectProject+`?id=${params.id}`                
                )
                .then(res => res.json())
                .then(                    
                        (res) => {                          
                            this.setState({data : res[0]})                     
                        },                
                        (error) => { console.log('here error')}
                );
        }
    }

    editHandler = event => {
        console.log('Edit Handler')
        
        fetch(
            API.updateProject,
            {
                method: "POST",
                headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
                body:  JSON.stringify({id : this.state.data._id})
            }
        )
        .then( res => res.json() )
        .then(                    
            (res) => {
                console.log(res)                          
                this.setState({data : res})                     
            },                
            (error) => { console.log('here error')}
    );
    }

    deleteHandler = event =>{
        console.log('Delete Handler')
        fetch(
            API.deleteProject,
            {
                method: "POST",
                headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
                body:  JSON.stringify({id : this.state.data._id})
            }
        )
        .then( res => res.json() )
        .then(                    
            (res) => {
                console.log(res)                          
                this.setState({data : res})                     
            },                
            (error) => { console.log('here error')}
        );        

    }

    render(){                
        return(
            <main id="main">            
                <div className="main">
                    <table className="projectTable">
                        <thead>
                            <tr>
                            { 
                                Object.keys(this.state.data).map( key => {                    
                                    // const [key, value] = pair;
                                    return <th>{key}</th>;
                                }) 
                            }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            { 
                                Object.values(this.state.data).map( elem => {
                                    return <td>{elem}</td>
                                }) 
                            }
                            </tr>
                        </tbody>
                    </table>  
                    <div className='ProjectEditWrapper'>
                        <input type='submit' value='Edit' onClick={this.editHandler}/>
                        <input type='submit' value='Delete' onClick={this.deleteHandler} />
                    </div>  

                </div>
            </main>
        )
    };
};

export default ProjectView;