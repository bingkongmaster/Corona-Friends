console.log('map_static');
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