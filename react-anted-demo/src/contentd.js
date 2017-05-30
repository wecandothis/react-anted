import React,{Component} from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './css/contentd.css'
import li1 from "./images/li1.jpg"
import li2 from "./images/li2.jpg"
import li3 from "./images/li3.jpg"
import li4 from "./images/li4.jpg"
import li5 from "./images/li5.jpg"
import li6 from "./images/li6.jpg"
import li7 from "./images/li7.jpg"
import li8 from "./images/li8.jpg"


export default class Contentd extends Component{

  getChildrenToRender = (item) => {
   
    return (<li
      key={item.index}  
    >
      <div>
        <span><img src={item.img} height="100%" alt=" " /></span>
        <p>{item.content}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e) => {
    const index = e.index;
    const delay = index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const dataArray = [
      { img: li1, content: '风华正茂',index:'1' },
      { img: li2, content: '风华正茂',index:'2' },
      { img: li3, content: '风华正茂',index:'3' },
      { img: li4, content: '风华正茂',index:'4' },
      { img: li5, content: '器宇轩昂',index:'5' },
      { img: li6, content: '器宇轩昂',index:'6' },
      { img: li7, content: '器宇轩昂',index:'7'},
      { img: li8, content: '器宇轩昂',index:'8'},
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div className="Fcontent"          >
        <OverPack className="contentd">
          <TweenOne className="contentdanimation"
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            
            key="h1"
            reverseDelay={300}  >
            <h2 id="threemao">HI</h2>
                <h1>那些花儿一样的人</h1>
               <span><a href="app2"> see other more</a></span> 
          </TweenOne>
          <TweenOneGroup
           className="contentdgroup"
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
         
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }



}