/*
import React from "react"

export default class Home extends React.Component {
  render() {
    //const myExtScript1 = require("../js/kakaoapi.js")
    //const myExtScript2 = require("../js/map.js")
    return (
      <div style={{ color: `purple` }}>
        <div id="map" style={{ height: '2000px',width: '2000px'}}></div>
        <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('kakaoapi');
            <script src="../js/kakaoapi.js" type="text/javascript"></script>
            <script src="../js/map.js" type="text/javascript"></script>
            `
          }}
        />
      </div>
    )}
}
*/
/*
import React from "react"

export default class Home extends React.Component {
  render() {
    //const myExtScript1 = require("../js/kakaoapi.js")
    //const myExtScript2 = require("../js/map.js")
    return (
      <div style={{ color: `purple` }}>
        <div id="map" style={{ height: '2000px',width: '2000px'}}></div>
        <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('kakaoapi');
            window.kakao=window.kakao||{},window.kakao.maps=window.kakao.maps||{},window.daum&&window.daum.maps?window.kakao.maps=window.daum.maps:(window.daum=window.daum||{},window.daum.maps=window.kakao.maps),function(){function a(){if(E.length){t(S[E.shift()],a).start()}else e()}function t(a,t){var e=document.createElement("script");return e.charset="utf-8",e.onload=t,e.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&t()},{start:function(){e.src=a||"",
            document.getElementsByTagName("head")[0].appendChild(e),e=null}}}function e(){for(;c[0];)c.shift()();o.readyState=2}var o=kakao.maps=kakao.maps||{};if(void 0===o.readyState)o.onloadcallbacks=[],o.readyState=0;else if(2===o.readyState)return;o.VERSION={ROADMAP:"1912uow",ROADMAP_SUFFIX:"",HYBRID:"1912uow",SR:"3.00",ROADVIEW:"7.00",ROADVIEW_FLASH:"200402",BICYCLE:"6.00",USE_DISTRICT:"1912uow",
            SKYVIEW_VERSION:"160114",SKYVIEW_HD_VERSION:"160107"},o.RESOURCE_PATH={ROADVIEW_AJAX:"//t1.daumcdn.net/roadviewjscore/core/css3d/200204/standard/1580795088957/roadview.js"};for(var n,r="https:"==location.protocol?"https:":"http:",s="",i=document.getElementsByTagName("script"),d=i.length;n=i[--d];)if(/\/(beta-)?dapi\.kakao\.com\/v2\/maps\/sdk\.js\b/.test(n.src)){s=n.src;break}i=null;var c=o.onloadcallbacks,E=["v3"],I="",S={v3:r+"//t1.daumcdn.net/mapjsapi/js/main/4.2.0/kakao.js",services:r+"//s1.daumcdn.net/svc/attach/U03/cssjs/mapapi/libs/1.0.1/1515130215283/services.js",drawing:r+"//t1.daumcdn.net/mapjsapi/js/libs/drawing/1.2.5/drawing.js",
            clusterer:r+"//s1.daumcdn.net/svc/attach/U03/cssjs/mapapi/libs/1.0.6/1460434272434/clusterer.js"},_=function(a){var t={};return a.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,e,o){t[e]=o}),t}(s);I=_.appkey,I&&(o.apikey=I),o.version="4.2.0";var R=_.libraries;if(R&&(E=E.concat(R.split(","))),"false"!==_.autoload){for(var d=0,l=E.length;d<l;d++)!function(a){a&&document.write('<script charset="UTF-8" src="'+a+'"><\/script>')}(S[E[d]]);o.readyState=2}o.load=function(t){switch(c.push(t),o.readyState){case 0:o.readyState=1,a();break;case 2:e()}}}();          
            `
          }}
        />
        <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('map');
            {
              var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                  center: new kakao.maps.LatLng(37.56591, 126.97894), // 지도의 중심좌표
                  level: 4, // 지도의 확대 레벨
                  mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
                };
          
              // 지도를 생성한다
              var map = new kakao.maps.Map(mapContainer, mapOption);
          
            }
            `
          }}
        />
      </div>
    )}
}
*/
/*
import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ color: `purple` }}>
        <div id="map" style={{ height: '2000px',width: '2000px'}}></div>
        <Helmet>
          <script src={withPrefix('kakaoapi_static.js')} type="text/javascript" />
          <script src={withPrefix('map_static.js')} type="text/javascript" />
        </Helmet>
        <script src="../js/kakaoapi.js" type="text/javascript"></script>
        <script src="../js/map.js" type="text/javascript"></script>
      </div>
    )}
}
*/
/*
import React from "react"
import {Map} from 'kakao-map-react'

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ color: `purple` }}>
        <p>hi2</p>
        <div id="map" style={{ height: '2000px',width: '2000px'}}></div>
        <Map id='map' 
        initialPosition={{latitude:'37.56577', longitude:'126.98019'}}
        center={{latitude:'37.56577', longitude:'126.98019'}} />
      </div>
    )}
}
*/

import React, { useEffect } from "react"


export default function Home(props){
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
  
    let map = new window.kakao.maps.Map(container, options);
  
  }, [])
  return (
    <div style={{ color: `purple` }}>
      <p>코로나맵</p>
      <p>By.김동환</p>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  )
}