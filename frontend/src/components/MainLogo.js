import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class MainLogo extends Component{
    render() {
        return (
            <div id="mainLogo">
                {/* <a href="index">                 */}
                <Link to="/">
                    <img src="http://ardeonova.com/sites/all/themes/riftek/logo.png" alt="LOGO"/>
                {/* </a> */}
                </Link>
            </div>  
        );
    }
}

export default MainLogo;