import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Contain from  './router'
import App1 from './App1'
import App2 from './App2' 
class App extends Component {
  render(){
    return (
         <Router>
            <div className="Contain">
            <Route exact path="/" component={Contain} />
            <Route path="/app1" component={App1} />
            <Route path="/app2" component={App2} />


            </div>
           

         </Router>
      )
  }
  



}

  

    
   
   



export default App;
