import React, {Component} from 'react'

class MainLogo extends Component{
    constructor( props ){
        super( props );
    }
    render() {
        return (
            <div id="mainLogo">
                <a href="#">
                    <img src="http://ardeonova.com/sites/all/themes/riftek/logo.png" alt="logo"/>
                </a>
            </div>  
        );
    }
}

export default MainLogo;