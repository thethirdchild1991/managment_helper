import React, { Component } from 'react';
import Header from './Header'
import MainData from './MainData'
import Footer from './Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header />  
        <MainData />  
        <Footer />           
      </div>
    );
  }
}

export default App;
