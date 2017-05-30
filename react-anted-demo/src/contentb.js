import React,{Component} from 'react'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import shop1 from './images/li4.jpg'
import  './css/contentb.css'

export default class Contentb extends Component{
   render(){
    return (<div className="Scontent">

        <OverPack>
          <TweenOne key="img" className="contentbimg"
           animation={{ x: '-=30', opacity: 0, type: 'from' }}
           resetStyleBool>
            <h2 id="secondmao">
             STORY 
            </h2>
            <img src={shop1} alt="" />
          </TweenOne>
          <QueueAnim
          animation={'right'}
           className="contentbp"
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}          >
            <h2 key="h1" >
              企业资源管理
            </h2>
            <p key="p" >
              云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。
            </p>
            

          </QueueAnim>
        </OverPack>

    	</div>
           

    	
       


    	)



   }




}