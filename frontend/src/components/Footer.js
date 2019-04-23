import React, {Component} from 'react'
import {footerSocNetworksData} from '../configs/socNetSettings'


const footerSocNetworksElements = footerSocNetworksData.map( value => {
    return (
        <a href={value.link} target="blank" key={value.link}>        
            <img alt={value.alt} src={value.img} />
        </a>
        )
})
class Footer extends Component{
    render () {
        return(
            <footer id='footer'>
            {footerSocNetworksElements}
            </footer>
        );
    }
}

export default Footer;