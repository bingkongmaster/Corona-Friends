import React, { useEffect } from "react"
import AppStyles from "./App.module.css"
import MyKakao from '../API/MyKakao'


export default function App(props){
    useEffect(() => {
        let map = MyKakao.createMap();
        MyKakao.displayMarkerCoronaData(map);
        MyKakao.setGeolocation(map);
    }, [])
    return (
        <>
        <div className={AppStyles.App} id="map"></div>
        </>
    )
}

/*
const coronaFriends = [

    [33.450705,126.570677]
    [33.450936,126.569477]
    [33.450879,126.569940]
]
*/