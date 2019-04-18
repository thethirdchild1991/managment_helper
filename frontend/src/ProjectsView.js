import React, {Component} from 'react'
import ProjectElem from './ProjectElem';

class ProjectsView extends Component{
    constructor(props){
        super(props);        
    }

    render(){        
        return  <table className="projectTable">
                    { 
                        Object.entries(this.props.data[2]).map( pair => {                    
                            const [key, value] = pair;
                            return <th>{key}</th>;
                        }) 
                    }
                    
                    
                    
                    { 
                        this.props.data.map( elem => {
                            return <ProjectElem data={elem}/>
                        }) 
                    }
                    
                </table>
    }
}

export default ProjectsView;