/*global kakao*/
import React, { useEffect } from "react"
import AppStyles from "./App.module.css"

export default function App(props){
  useEffect(() => {

    //-----------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------
    //!맵 만들기
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(36.13345, 127.96176),
      level: 13
    };
  
    let map = new kakao.maps.Map(container, options);

    //-----------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------
    //!코로나 친구들 표시하기

    function displayMarkerCoronaData() {
        // 마커가 표시될 위치입니다 
        for(var i = 0; i < coronaData.length; i++){

            var locPosition = new kakao.maps.LatLng(coronaData[i].latitude, coronaData[i].longitude),
                message = coronaData[i].name;
                
            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
            /*
            var markerPosition  = new kakao.maps.LatLng(coronaData[i].latitude, coronaData[i].longitude); 

            // 마커를 생성합니다
            var savedmarker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            savedmarker.setMap(map);
            */
        }
    }
    displayMarkerCoronaData();
    //-----------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------
    
    // !내위치 찾기
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    function setGeolocation() {
    if (navigator.geolocation) {
        
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
            
            var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">전 여기에요!</div>'; // 인포윈도우에 표시될 내용입니다
                
            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
            zoomMove(locPosition);
                
          });
        
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
            message = '길을 잃었어요..'
            
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
        zoomMove(locPosition);
    }
    }
    setGeolocation();
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition
        }); 
        
        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content : '<div style="padding:5px;font-size:12px;">'+iwContent,
            removable : iwRemoveable
        });
        
        // 인포윈도우를 마커위에 표시합니다 
        infowindow.open(map, marker);
    }
    function zoomMove(locPosition) {
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

const coronaData = [

    {name:'성우사우나',latitude:37.6761548586276,longitude:127.047872695316},
    {name:'서울의료원',latitude:37.6128675208202,longitude:127.098092484676},
    {name:'남양주보건소',latitude:37.610500142345956,longitude:127.1711727565189},
    {name:'고려대학교안암병원',latitude:37.5872090646066,longitude:127.026462112346},
    {name:'누리꿈서울아산내과의원',latitude:37.5791890739327,longitude:126.89030474896},
    {name:'성산주유소',latitude:37.567467456774196,longitude:126.90984521002392},


]
/*
const coronaFriends = [

    [33.450705,126.570677]
    [33.450936,126.569477]
    [33.450879,126.569940]
]
*/