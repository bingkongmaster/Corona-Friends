/*global kakao*/
import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=ee494d4410cf578c0566203d2f487eb9";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(523951.25, 1085073.75)
                });
            });
        };
    }

    render() {
        return (
            <div className="App" id="map"></div>
        );
    }
}

export default App;
/*
import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=ee494d4410cf578c0566203d2f487eb9";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(523951.25, 1085073.75)
                });
            });
        };
    }

    render() {
        return (
            <div className="App" id="map"></div>
        );
    }
}

export default App;
*/