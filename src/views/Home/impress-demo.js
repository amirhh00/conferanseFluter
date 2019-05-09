import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Moghadame from '../../components/Moghadame';
import Moarefi from '../../components/Moarefi';
import Native from '../../components/Native';
import WebView from '../../components/WebView';
import JSFramWorks from './../../components/JavascriptFrameworks'
import PWA from './../../components/PWA';
import Xamarin from './../../components/Xamarin'

export default [
  {
    id: "01",
    className: "_slide",
    data: {
      x: 3500,
      y: 3000,
      z: 20000
    },
    content: [
      <span></span>
    ]
  },
  {
    id: "02",
    className: "slide logo",
    data: {
      x: -1000,
      y: -1500,
    },
    content: [
      <Moghadame />
    ]
  },
  {
    data: {
      y: -1500
    },
    content: [
      <div style={{width:'100%',display:'flex',flexDirection:'column'}} >
        <h4 style={{textAlign:'center'}}>فهرست</h4><br/>
        <p style={{textAlign:'center'}}>(معرفی فلاتر (صفحه &#1780; <FaAngleLeft /> </p>
        <p style={{textAlign:'center'}}>(مقایسه فلاتر (صفحه &#1781; <FaAngleLeft /> </p>
        <p style={{textAlign:'center'}}>(امکانات جدید (صفحه &#1782; <FaAngleLeft /> </p>
        <p style={{textAlign:'center'}}>(نتیجه گیری (صفحه &#1783; <FaAngleLeft /> </p>

      </div>
    ]
  },
  {
    id: "Moarefi",
    data: {
      x: 1000,
      y: -1500
    },
    content: [
      <Moarefi />
    ]
  },
  {
    data: {
      x: -1000,
      y: 700,
      scale: 4
    },
    content: [
      <div style={{textAlign:'center'}} >
        <h1 style={{marginRight:'-50px'}} >چرا</h1>
        <span style={{marginRight:'50px'}} className="try">فلاتر خوبه؟</span>
      </div>,
    ]
  },
  {
    id: "compare",
    data: {
      x: 550,
      y: 3000,
      rotateZ: 90,
      scale: 5
    },
    content: [
      <div dir="rtl">
        <h4 >تکنولوژی های مشابه</h4>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> زبان های Native  </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> WebView ها </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> ابزار های جاوااسکریپت </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> PWA </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> Xamarin </p>
      </div>
    ]
  },
  {
    id: "nativeLangs",
    data: {
      x: 550,
      y: 3000,
      z: -6000,
      rotateZ: 300,
      scale: 1
    },
    content: [
      <Native />
    ]
  },{
    id: "webView",
    data: {
      x: 550,
      y: 3000,
      z: -8000,
      rotateZ: 300,
      scale: 1
    },
    content: [
      <WebView />
    ]
  },{
    id: "jsFrameWorks",
    data: {
      x: 550,
      y: 3000,
      z: -10000,
      rotateZ: 300,
      scale: 1
    },
    content: [
      <JSFramWorks />
    ]
  },{
    id: "PWA",
    data: {
      x: 550,
      y: 3000,
      z: -12000,
      rotateZ: 300,
      scale: 1
    },
    content: [
      <PWA />
    ]
  },{
    id: "xamarin",
    data: {
      x: 550,
      y: 3000,
      z: -14000,
      rotateZ: 300,
      scale: 1
    },
    content: [
      <Xamarin />
    ]
  },
  {
    id: "big",
    data: {
      x: 3500,
      y: 2100,
      rotateZ: 180,
      scale: 6
    },
    content: [
      <p>visualize your <b>big</b> <span className="thoughts">thoughts</span></p>
    ]
  },
  // {
  //   id: "tiny",
  //   data: {
  //     x: 2825,
  //     y: 2325,
  //     z: -3000,
  //     rotateZ: 300,
  //     scale: 1
  //   },
  //   content: [
  //     <p>and <b>tiny</b> ideas</p>
  //   ]
  // },
  {
    id: "ing",
    data: {
      x: 3500,
      y: -850,
      rotateZ: 270,
      scale: 6
    },
    content: [
      <p>by <b className="positioning">positioning</b>, <b className="rotating">rotating</b> and <b className="scaling">scaling</b> them on an infinite canvas</p>
    ]
  },
  {
    id: "imagination",
    data: {
      x: 6700,
      y: -300,
      scale: 6
    },
    content: [
      <p>the only <b>limit</b> is your <b className="imagination scaling-up">imagination</b></p>
    ]
  },
  {
    id: "source",
    data: {
      x: 6300,
      y: 2000,
      rotateZ: 20,
      scale: 4
    },
    content: [
      <p>want to know more?</p>,
      <q><a href="http://github.com/bartaz/impress.js" target="_blank" rel="nofollow">use the source</a>, Luke!</q>
    ]
  },
  {
    id: "one-more-thing",
    data: {
      x: 6000,
      y: 4000,
      scale: 2
    },
    content: [
      <p>one more thing...</p>
    ]
  },
  {
    id: "its-in-3d",
    data: {
      x: 6200,
      y: 4300,
      z: -100,
      rotateX: -40,
      rotateY: 10,
      scale: 2
    },
    content: [
      <p><span className="have">have</span> <span className="you">you</span> <span className="noticed">noticed</span> <span className="its">it’s</span> <span className="in">in</span> <b>3D<sup>*</sup></b>?</p>,
      <span className="footnote">* beat that, prezi ;)</span>
    ]
  },
  {
    id: "by-react-impressjs",
    data: {
      x: 3000,
      y: 6000,
      z: 4000,
      rotateX: -70,
      rotateY: 30,
      scale: 10
    },
    content: [
      // <p>This demo of impress.js is made via <a href="https://github.com/GeorgioWan/react-impressjs" target="_blank">React-impressJS</a></p>
    ]
  }
];