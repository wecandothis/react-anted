import React,{Component} from 'react'
import TweenOne from 'rc-tween-one';
import title from './images/title.ico'
import './css/header.css'
export default class Header extends Component{
    constructor(props) {
    super(props);
    this.state={
      dada:""
    }
  }

  jumpsome(e){
  let anchorElement = document.getElementById(e);
   if(anchorElement) { anchorElement.scrollIntoView(); }
  }

  render(){
   return (

<TweenOne className='secondanimation' animation={{x:-30,type:'from', duration:2000}} style={{display:'inline-block'}}>

      <img src={title} alt=" "  id="firstmao"/>
      <span>你的样子我一千种喜欢</span>
   <ul>
    <li  onClick={()=>this.jumpsome("firstmao")}>Home</li>
    <li  onClick={()=>this.jumpsome("secondmao")}>Do</li>
    <li  onClick={()=>this.jumpsome("threemao")}>Story</li>
    <li  onClick={()=>this.jumpsome("fourmao")}>Down</li>
   </ul>
   

</TweenOne>
   )
  }
    


}