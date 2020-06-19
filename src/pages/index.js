import React from "react"
import {Helmet} from "react-helmet";

export default class Home extends React.Component {
  render() {
  return (
    <div style={{ color: `purple` }}> //later change to layout
    const myExtScript = require('../scripts/kakaomap')
      <p>Welcome to donghwankim.com!</p>
      <p>Powered by Gatsby</p>
      <div id="map" style="width:500px;height:400px;"></div>
      <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3199e8f198aff9d5aff73000faae6608"></script>
      <script
        dangerouslySetInnerHTML={{ __html:
          `
          var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
              mapOption = {
                  center: new kakao.maps.LatLng(37.56591, 126.97894), // 지도의 중심좌표
                  level: 4, // 지도의 확대 레벨
                  mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
              }; 
      
          // 지도를 생성한다 
          var map = new kakao.maps.Map(mapContainer, mapOption); `
        }}
      />
    </div>
  )}
}