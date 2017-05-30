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
          animation={'left'}
           className="contentcp"
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}          >
            <h2 key="h1" >
              企业资源管理
            </h2>
            <p key="p" >
              云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。
            </p>
            <button><a href="app1">more</a></button>

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