import React, { Component } from 'react';
import Header from './Header'
import MainData from './MainData'
import Footer from './Footer';
import Nav from './Nav'
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Header />  
        <Nav />
        <MainData />  
        <Footer />           
      </>
      
    );
  }
}

export default App;
