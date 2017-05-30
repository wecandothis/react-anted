
import React, { Component } from 'react';
import Header from './header'
import Contenta from './contenta'
import Contentb from './contentb'
import Contentc from './contentc'
import Contentd from './contentd'
import Footer from './foot'
class Contain extends Component {

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

  

    
   
   



export default Contain;