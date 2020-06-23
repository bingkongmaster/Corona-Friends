/*global kakao*/
import React, { useEffect } from "react"
import AppStyles from "./App.module.css"

export default function App(props){
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(36.13345, 127.96176),
      level: 13
    };
  
    let map = new window.kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다 
    var markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667); 

    // 마커를 생성합니다
    var savedmarker = new window.kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    savedmarker.setMap(map);
    
    //-----------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------
    
    // !내위치 찾기
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
            
            var locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">내 위치!</div>'; // 인포윈도우에 표시될 내용입니다
            console.log(lat);
            console.log(lon);
            var here = map.getCenter();
            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
                
          });
        
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        
        var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),    
            message = 'geolocation을 사용할수 없어요..'
            
        displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({  
            map: map, 
            position: locPosition
        }); 
        
        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new window.kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
        
        // 인포윈도우를 마커위에 표시합니다 
        infowindow.open(map, marker);
        
        // +접속위치로 zoom
        map.setLevel(8);
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
    }    
  }, [])
  return (
    <>
    <div className={AppStyles.App} id="map"></div>
    </>
  )
}