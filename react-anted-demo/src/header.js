import React,{Component} from 'react'
import TweenOne from 'rc-tween-one';
import title from './images/title.ico'
import './App.css';
export default class Header extends Component{
    constructor(props) {
    super(props);
    
  }

  render(){
   return (

<TweenOne className='secondanimation' animation={{x:-30,type:'from',ease:'easeOutQuad'}} style={{display:'inline-block'}}>

      <img src={title} />
      <span>this is demo</span>
   <ul>
    <li>导航1</li>
    <li>导航2</li>
    <li>导航3</li>
    <li>导航4</li>
   </ul>
   

</TweenOne>
   )
  }
    


}