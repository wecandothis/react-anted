import React,{Component} from 'react'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import  './css/contentc.css'
import shop1 from './images/li3.jpg'


export default class Contentc extends Component{

     render(){
    return (<div className="Tcontent">

        <OverPack>
          <QueueAnim
         type={'left'} 
           className="contentcp"
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}          >
            <h2 key="h1" >
              爱你就像爱生命
            </h2>
            <p key="p" >
             我把我整个灵魂都给你，连同它的怪癖，耍小脾气，忽明忽暗，一千八百种坏毛病.
            </p>
          <TweenOne key="button" component="button" className="contentcbutton"
           animation={{ x: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
           resetStyleBool>
              <a href="app1">more</a>
          </TweenOne>

          </QueueAnim>
          <TweenOne key="img" className="contentcimg"
           animation={{ x: '+=30', opacity: 0, type: 'from' }}
           resetStyleBool>
            <img src={shop1} alt="" />
          </TweenOne>

        </OverPack>

    	</div>
           

    	
       


    	)



   }



}