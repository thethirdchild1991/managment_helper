import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProjectNavCol extends Component{
    constructor(props){
        super(props)        
        this.state = {
            data : props.data,
        }
    }

    render(){        
        return(
            <div className="MainNavWrapper">
                   <nav>
                       <ul>
                           {this.state.data.map(elem => {
                                return (
                                    <li key={elem._id}>
                                        <Link to={`project/${elem._id}`}>
                                            {elem.project}
                                        </Link>
                                    </li>
                                )
                            })}                           
                       </ul>
                    </nav> 
            </div>
        )
    }
}

export default ProjectNavCol;