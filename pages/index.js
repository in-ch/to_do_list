import React from 'react';
import AppLayout from '../components/AppLayout';
import SliderInch from '../components/SliderInch.jsx';
import Gallery from '../components/Gallery.jsx';
import BestChoice from '../components/BestChoice.jsx';

const Home = () => {
    const slideData = [
        {"src":"url(http://www.upskin.co.kr/images/main/special/1.jpg)","text":"당신과 함께 합니다."},
        {"src":"url(http://www.upskin.co.kr/images/main/special/2.jpg)","text":"당신과 함께 합니까?"},
        {"src":"url(http://www.upskin.co.kr/images/main/special/3.jpg)","text":"당신과 함께 할까요?"},
    ];
    const slideData2 = [
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202012022145401080.jpg)","text":"0"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202011301422859400.jpg)","text":"1"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202012022145401080.jpg)","text":"2"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202011301422859400.jpg)","text":"3"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202012022145401080.jpg)","text":"4"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202012022145401000.jpg)","text":"5"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202012022145401080.jpg)","text":"6"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202012022145401000.jpg)","text":"7"},
        {"src":"url(http://www.upskin.co.kr/files/mainhotpick/attach1/1_202012022145401080.jpg)","text":"8"},
    ];
    return (
        <>
            <AppLayout>
                <SliderInch slideData={slideData}/>
                <Gallery slideData={slideData2}/>
                <BestChoice />
                <br/><br/><br/>
                <br/><br/><br/>
                <br/><br/><br/>
            </AppLayout>
        </>
    );
};
export default Home;