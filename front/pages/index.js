import React from 'react';
import AppLayout from '../components/AppLayout';
import SliderInch from '../components/SliderInch.jsx';
import Gallery from '../components/Gallery.jsx';
import BestChoice from '../components/BestChoice.jsx';
import BoardPreview from '../components/BoardPreview.jsx';
import MainPageOnlineConsulting from '../components/MainPageOnlineConsulting';

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
    const galleryData = [
        {"src":"url(http://www.upskin.co.kr/images/main/best/1.jpg)","heading":"여드름","text":"여드름치료의 역사를 만듭니다.","text2":"여드름/자국/흉터 복합치료 연구개발","type":""},
        {"src":"url(http://www.upskin.co.kr/images/main/best/2.jpg)","heading":"색소","text":"어려운 색소치료도 가능합니다. ","text2":"환자 증상 별 색소치료레이저","type":"upper"},
        {"src":"url(http://www.upskin.co.kr/images/main/best/4.jpg)","heading":"안티에이징","text":"주름과 탄력을 동시에 개선합니다.","text2":"20~60대 연령대별 맞춤 시술"},
        {"src":"url(http://www.upskin.co.kr/images/main/best/3.jpg)","heading":"문신제거","text":"흑백/컬러/복합문신도 깨끗하게!","text2":"시술 후 색소침착 및 통증 최소화","type":"upper"},
    ];
    const boardPreview = [
        {"type":0,"text":"[안내] 2월 설 연휴 진료 일정","data":"2021-01-29"},
        {"type":0,"text":"[안내] 2월 설 연휴 진료 일정","data":"2021-01-29"},
        {"type":0,"text":"[안내] 2월 설 연휴 진료 일정","data":"2021-01-29"},
        {"type":0,"text":"[안내] 2월 설 연휴 진료 일정","data":"2021-01-29"},
    ];
    const newPreview = [
        {"type":0,"text":"[MBN 특집다큐H] 건강","data":"2021-01-29"},
        {"type":1,"text":"엑셀v레이저에서 제네시스 모두","data":"2021-01-29"},
        {"type":2,"text":"[안내] 2월 설 연휴 진료 일정","data":"2021-01-29"},
        {"type":3,"text":"엑셀v레이저 기능 강화된 엑스레이","data":"2021-01-29"},
    ];
    return (
        <>
            <AppLayout>
                <SliderInch slideData={slideData}/>
                <Gallery slideData={slideData2}/>
                <BestChoice galleryData={galleryData}/>
                <BoardPreview boardPreview={boardPreview} newPreview={newPreview}/>
                <MainPageOnlineConsulting/>
            </AppLayout>
        </>
    );
};
export default Home;