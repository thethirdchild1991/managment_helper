import React from 'react'
import {Component} from 'react'
import {footerSocNetworksData} from './socNetSettings'


const footerSocNetworksElements = footerSocNetworksData.map( value => {
    return (
        <a href={value.link} target="blank">
            <img alt={value.alt} src={value.img} />
        </a>
        )
})
class Footer extends Component{
    constructor(){
        super();
    }
    render () {
        return(
            <footer id='footer'>
            {footerSocNetworksElements}
            </footer>
        );
    }
}

export default Footer;