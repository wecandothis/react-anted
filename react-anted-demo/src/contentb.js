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
          <QueueAnim type={'right'}  className="contentbp"
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}          >
            <h2 key="h1" >
              黄金时代
            </h2>
            <p key="p" >
             那一天我二十一岁，在我一生的黄金时代，我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云，后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消逝，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。

            </p>
            

          </QueueAnim>
        </OverPack>

    	</div>
           

    	
       


    	)



   }




}