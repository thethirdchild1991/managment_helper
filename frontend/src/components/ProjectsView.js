import React, {Component} from 'react'
import ProjectElem from './ProjectElem';

class ProjectsView extends Component{
    render(){          
        return  <table className="projectTable">
                    <thead>
                        <tr>
                        { 
                            Object.keys(this.props.data[0]).map( key => {                    
                                // const [key, value] = pair;
                                return <th key={key}>{key}</th>;
                            }) 
                        }
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.props.data.map( elem => {
                            return <ProjectElem data={elem}/>
                        }) 
                    }
                    </tbody>
                </table>
    }
}

export default ProjectsView;