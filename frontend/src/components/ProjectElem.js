import React, {Component} from 'react'

class ProjectElem extends Component{
    constructor( props ){
        super( props );
    }

    render(){
        // console.log(this.props.data)        
        
        return (
            
            <tr>
                {
                    Object.entries(this.props.data).map( pair => {                    
                        const [key, value] = pair;
                        
                        // return (`${key} : ${value}`);
                        return <td>{value}</td>;
                    })
                }
            </tr>
        );
        
    }

}

export default ProjectElem;