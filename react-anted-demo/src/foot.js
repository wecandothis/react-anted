import React,{Component}from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './css/foot.css'

export default class Footer extends Component {

 
  render() {
   
  
    return (<OverPack className="footerdiv"
  
      playScale={0.05}   >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer" component="span"
      >
      
          Copyright © 2017 The Project by <a href="#">feng</a>. All Rights Reserved
      
      </TweenOne>
    </OverPack>);
  }
}


