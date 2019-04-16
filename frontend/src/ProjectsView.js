import React, {Component} from 'react'
import ProjectElem from './ProjectElem';

class ProjectsView extends Component{
    constructor(props){
        super(props);        
    }

    render(){        
        return  <table className="projectTable">
                    {
                        Object.entries(this.props.data[0].props).map( pair => {                    
                            const [key, value] = pair;
                            return <th>{key}</th>;
                        })
                    }
                    {this.props.data.map( elem => {
                        return <ProjectElem data={elem.props}/>
                    })}
                </table>
    }
}

export default ProjectsView;