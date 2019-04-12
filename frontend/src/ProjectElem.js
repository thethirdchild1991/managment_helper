import React, {Component} from 'react'

class ProjectElem extends Component{
    constructor( props ){
        super( props );
    }

    render(){
        return (
            <ul>
                {
                    Object.entries(this.props.mdata).map( pair => {                    
                        return ( pair[1] );
                    })
                }
            </ul>
        );
        
    }

}

export default ProjectElem;