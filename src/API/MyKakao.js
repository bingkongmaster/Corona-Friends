/*global kakao*/
import coronaData from "../data/coronaData.js"
import redmarker from'../images/redperson.png';

//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
//!맵 만들기

export function createMap(){
    let container = document.getElementById('map');
    let options = {
        center: new kakao.maps.LatLng(36.13345, 127.96176),
        level: 13
    };

    return new kakao.maps.Map(container, options);
}
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
//!코로나 친구들 표시하기

export function displayMarkerCoronaData(map) {
    // 마커가 표시될 위치입니다 
    for(var i = 0; i < coronaData.length; i++){
        var markerPosition  = new kakao.maps.LatLng(coronaData[i].latitude, coronaData[i].longitude); 

        var imageSize = new kakao.maps.Size(20, 20); 
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(redmarker, imageSize); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            title: coronaData[i].name,
            image : markerImage,
            isOpen: false
        });
        
        // 마커에 표시할 인포윈도우를 생성합니다 
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="padding:5px; font-weight:bold";>'
            + '<img src="favicon-32x32.png" style="width:24px;height:24px;">'//this brings favicon in built public file
            + coronaData[i].name
            + '</img></div>'
        });

        //마우스 hover functions
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(map, marker, infowindow));

        //마우스 click function
        kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, infowindow));

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        
    }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
export function makeClickListener(map, marker, infowindow) {
    return function() {
        if(marker.isOpen){
            infowindow.close();
            marker.isOpen = false;
        }
        else{
            infowindow.open(map, marker);
            marker.isOpen = true;
        }
        
    };
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
export function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
export function makeOutListener(map, marker, infowindow) {
    return function() {
        if(!marker.isOpen){
            infowindow.close();
        }
    };
}
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------

// !내위치 찾기
// HTML5의 geolocation으로 사용할 수 있는지 확인합니다

export function setGeolocation(map) {
    if (navigator.geolocation) {
        
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
            
            var locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                //message = '<div style="padding:5px;">전 여기에요!</div>'; // 인포윈도우에 표시될 내용입니다
                
            // 마커와 인포윈도우를 표시합니다
            //displayMarker(locPosition, message);
            zoomMove(locPosition, map);
                
        });
        
    }
}
export function zoomMove(locPosition, map) {
    // +접속위치로 zoom
    map.setLevel(9);
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
}

export default {
    createMap: createMap,
    displayMarkerCoronaData: displayMarkerCoronaData,
    setGeolocation: setGeolocation
};