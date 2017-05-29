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

  getChildrenToRender = (item, i) => {
   
    return (<li
      key={i}  
    >
      <div>
        <span><img src={item.img} height="100%" /></span>
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
      { img: li1, content: 'Ant Design' },
      { img: li2, content: 'Ant Motion' },
      { img: li3, content: 'Ant Design' },
      { img: li4, content: 'Ant Motion' },
      { img: li5, content: 'Ant Design' },
      { img: li6, content: 'Ant Motion' },
      { img: li7, content: 'Ant Design' },
      { img: li8, content: 'Ant Motion' },
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div className="Fcontent"          >
        <OverPack className="contentd">
          <TweenOne className="contentdanimation"
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            
            key="h1"
            reverseDelay={300}  >
            <h2>HI</h2>
                <h1>客户案例</h1>
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