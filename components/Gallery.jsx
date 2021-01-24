import React, { Component, useCallback, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

const SlideWrapper = styled.div`
    margin-top:30px;margin-bottom:30px;
    div{
        height:500px;border:1px solid #000;
    }
`;


const Gallery = () =>  {

    const slideShow = 3.02;
    const [current, setCurrent] = useState(0);
    const galleryChange = useCallback((current,next)=>{
        console.log(current,next);
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slideShow,  // 이거 변수로 해서 바꿔야 될 듯 
        slidesToScroll: 3.02,
        arrows: false,
        centerMode: true,
        afterChange: (current) => console.log(current),
        initialSlide: 0,
    };

    return (
      <SlideWrapper>
        <h2>{current}</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </SlideWrapper>
    );
}

export default Gallery;
