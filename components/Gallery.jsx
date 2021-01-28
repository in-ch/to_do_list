import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

const SlideWrapper = styled.div`
    margin-top:30px;margin-bottom:30px;
    div{
        height:500px;
    }
    .slick-slide div{
      outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    }
    .slick-dots{
      position:relative;top:20px;
    }
    .img{
      display:block;width:230px;margin:0 auto;margin-top:50px;margin-bottom:10px;
    }
`;
const GalleryBox = styled.div`
    div{
      width:100%;height:100%;transform:scale(${props => props.index === props.cu ? 1.0 : 0.6 });transition: all 0.2s ease-in-out; 
      background-repeat: no-repeat;background-size: cover;background-position: top center;box-shadow: 5px 2px 8px RGBA(0,0,0,0.2);
    }
`;


const Gallery = ({slideData}) =>  {
    const [current, setCurrent] = useState(0);
    const SlideRef = useRef();  
    const [slideShow, setSlideShow] = useState();
    const size = useWindowSize();
    
    function useWindowSize() {
      const isClient = typeof window === 'object';
      function getSize() {
        let width = isClient ? window.innerWidth : undefined;
        let data;

        width > 550 ? data = 3.02 : data = 1;
        width > 550 ? setSlideShow(3.02) : setSlideShow(1);

        return data;
      }
      
      const [windowSize, setWindowSize] = useState(getSize);
      
      useEffect(() => {
        if (!isClient) {
          return false;
        }
  
        function handleResize() {
          setSlideShow(getSize());
        }
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []); 
  
      return windowSize;
    }


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slideShow,  // 이거 변수로 해서 바꿔야 될 듯 
      slidesToScroll: 3.02,
      arrows: false,
      centerMode: true,
      afterChange: (current) => setCurrent(current),
      initialSlide: current,
    };

    return (
      <SlideWrapper ref={SlideRef}>
        <br/><img className="img" src="/imgs/cleanup.png" /><br/><br/>
        <Slider {...settings}>
          {slideData.map((v,i)=>(
            <GalleryBox index={i} cu={current}>
              <div style={{backgroundImage: v.src}}>
                <h3>{v.text}</h3>
              </div>
            </GalleryBox>
          ))}
        </Slider>
      </SlideWrapper>
    );
}

export default Gallery;
