import React,{Component} from 'react'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './css/contenta.css'
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
          <h2 >DO IT</h2>
          
          <p>   
          有美一人兮，见之不忘。
          一日不见兮，思之如狂。
          凤飞翱翔兮，四海求凰。
          无奈佳人兮，不在东墙。
          将琴代语兮，聊写衷肠。
          何时见许兮，慰我彷徨。
          愿言配德兮，携手相将。
          不得於飞兮，使我沦亡。
         
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
