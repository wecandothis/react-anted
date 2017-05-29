import React,{Component} from 'react'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './css/contenta.css'
import shy from './images/shy.png'
import down from './images/down.png'
export default class Content extends Component {
 
 render() {
  
   
    return (<div className='contenta'>
            <OverPack
        replay
        playScale={[0.3, 0.1]}
      className="contenta"
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
         className="contentachild"
          key="text"
         
        >
          <h2>DO IT</h2>
          
          <p>
           
           这是一个demo文字
          </p>
        </QueueAnim>
        <TweenOne className="singlanimation"
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}      
        >
        <img src={down} alt="" />
        </TweenOne>
      </OverPack>



      </div>
     
    );
  }
}
