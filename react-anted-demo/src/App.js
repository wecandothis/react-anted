import './css/header.css'
import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Contenta from './contenta'
import Contentb from './contentb'
import Contentc from './contentc'
import Contentd from './contentd'
import Footer from './foot'
class App extends Component {
constructor(props) {
    super(props);
    this.animation = { left: '20%', yoyo: true, repeat: -1, duration: 1000 };
  }

  render() {
    return (<div className="content">
     <Header key="header" />
    <Contenta key="contenta" />
    <Contentb key="contentb" />
    <Contentc key="contentc" />
    <Contentd key="contentd" />
    <Footer key="footer" />
      </div>
    
    );
  }



}

  

    
   
   



export default App;
