import React from 'react';
import AppLayout from '../components/AppLayout';
import SliderInch from '../components/SliderInch.jsx';

const Home = () => {
    const slideData = [
        {"src":"url(http://www.upskin.co.kr/images/main/special/1.jpg)","text":"당신과 함께 합니다."},
        {"src":"url(http://www.upskin.co.kr/images/main/special/2.jpg)","text":"당신과 함께 합니까?"},
        {"src":"url(http://www.upskin.co.kr/images/main/special/3.jpg)","text":"당신과 함께 할까요?"},
    ];
    return (
        <>
            <AppLayout>
                <SliderInch slideData={slideData}/>
                <h2>content</h2>
                <h2>content</h2>
                <h2>content</h2>
                <h2>content</h2>
                <h2>content</h2>
            </AppLayout>
            
        </>
    );
};
export default Home;