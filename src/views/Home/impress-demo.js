import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Moghadame from '../../components/Moghadame';
import Moarefi from '../../components/Moarefi';
import Native from '../../components/Native';
import WebView from '../../components/WebView';
import JSFramWorks from './../../components/JavascriptFrameworks'
import PWA from './../../components/PWA';
import Xamarin from './../../components/Xamarin'
import Flutter1 from './../../components/Flutter'
import Beautiful from '../../components/Flutter/Beautiful';
import Productive from './../../components/Flutter/Productive'
import Fast from './../../components/Flutter/Fast'
import Open from './../../components/Flutter/Open'
import Perfect from '../../components/Perfect';
import FWeb from '../../components/Perfect/FWeb';
import FDesktop from '../../components/Perfect/FDesktop';
import FEmbedded from '../../components/Perfect/FEmbedded';


export default [
  {
    id: "01",
    className: "_slide",
    data: {
      x: 3500,
      y: 3000,
      z: 10000
    },
    content: [
      <span></span>
    ]
  },
  {
    id: "02",
    className: "slide logo",
    data: {
      y: -1500,
    },
    content: [
      <Moghadame />
    ]
  },
  {
    data: {
      x: 2000,
      y: -1500
    },
    content: [
      <div style={{width:'100%',display:'flex',flexDirection:'column'}} >
        <h4 style={{textAlign:'center'}}>فهرست</h4><br/>
        <p style={{textAlign:'center'}}>(معرفی فلاتر (صفحه &#1780; <FaAngleLeft /> </p>
        <p style={{textAlign:'center'}}>(مقایسه فلاتر (صفحه &#1782; <FaAngleLeft /> </p>
        <p style={{textAlign:'center'}}>(آینده فلاتر (صفحه &#1777;&#1784; <FaAngleLeft /> </p>
        <p style={{textAlign:'center'}}>(نتیجه گیری (صفحه &#1778;&#1778; <FaAngleLeft /> </p>

      </div>
    ]
  },
  {
    id: "Moarefi",
    data: {
      x: 4000,
      y: -1500
    },
    content: [
      <Moarefi />
    ]
  },
  {
    data: {
      x: 0,
      y: 700,
      scale: 7
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
      x: 250,
      y: 3000,
      rotateZ: 90,
      scale: 3
    },
    content: [
      <div dir="rtl">
        <h4 >تکنولوژی های توسعه موبایل</h4>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> زبان های Native  </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> WebView ها </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> ابزار های جاوااسکریپت </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> PWA </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> Xamarin </p>
        <p style={{marginRight:50,lineHeight:'2em'}}><FaAngleLeft /> Flutter </p>
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
    id: "flutter1",
    data: {
      x: 550,
      y: 3000,
      z: -16000,
      
      scale: 1
    },
    content: [
      <Flutter1 />
    ]
  },
  {
    id: "beautiful",
    data: {
      x: 1550,
      y: 3000,
      z: -16000,
      
      scale: 1
    },
    content: [
      <Beautiful />
    ]
  },
  {
    id: "productive",
    data: {
      x: 2550,
      y: 3000,
      z: -16000,
      
      scale: 1
    },
    content: [
      <Productive />
    ]
  },
  {
    id: "fast",
    data: {
      x: 3550,
      y: 3000,
      z: -16000,
      
      scale: 1
    },
    content: [
      <Fast />
    ]
  },
  {
    id: "open",
    data: {
      x: 4550,
      y: 3000,
      z: -16000,
      
      scale: 1
    },
    content: [
      <Open />
    ]
  },
  {
    id: "big",
    data: {
      x: 3500,
      y: 1100,
      rotateZ: 180,
      scale: 6
    },
    content: [
      <p> <b>چرا</b>فلاتر <span className="thoughts">عالیه؟</span></p>
    ]
  },
  {
    id: "perfect",
    data: {
      x: 6500,
      y: 1500,
      rotateZ: 270,
      scale: 4
    },
    content: [
      <Perfect />
    ]
  },
  {
    id: "fweb",
    data: {
      x: 1500,
      y: -3500,
      z: -8000,
      rotateZ: 270,
      scale: 6
    },
    content: [
      <FWeb />
    ]
  },
  {
    id: "fdesktop",
    data: {
      x: 1500,
      y: -3500,
      z: -10000,
      rotateZ: 270,
      scale: 6
    },
    content: [
      <FDesktop />
    ]
  },
  {
    id: "fembedded",
    data: {
      x: 1500,
      y: -3500,
      z: -12000,
      rotateZ: 270,
      scale: 6
    },
    content: [
      <FEmbedded />
    ]
  },
  {
    id: "imagination",
    data: {
      x: 6700,
      y: 4500,
      scale: 6
    },
    content: [
      <p style={{textAlign:'center'}} ><b className="imagination scaling-up">نتیجه گیری</b></p>
    ]
  },
  {
    id: "resources",
    data: {
      x: 3200,
      y: 4300,
      z: -100,
      rotateX: -40,
      rotateY: 10,
      scale: 2
    },
    content: [
      <div style={{textAlign:'right' , direction:'rtl'}} >
        <h1>منابع</h1><br />
        <ul>
          <li><a href="flutter.dev">flutter.dev</a></li>
          <li><a href="youtube.com">youtube.com</a></li>
          <li><a href="pub.dartlang.org">pub.dartlang.org</a></li>
          <li><a href="dart.dev">dart.dev</a></li>
          <li><a href="medium.com">medium.com</a></li>
        </ul>
        
      </div>
    ]
  },  
  {
    id: "tnx",
    data: {
      x: 3000,
      y: 6000,
      z: 4000,
      rotateX: -70,
      rotateY: 30,
      scale: 10
    },
    content: [
      <div dir="rtl" >
        <h3>پایان.. </h3>
        <p>سوال ؟ </p>
        <p>ممنون از وقتتون</p>
      </div>
    ]
  }
];