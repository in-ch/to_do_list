import React, { useEffect, useRef,useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from './Slide';


const Container = styled.div`
  width: 100%;
  height:95%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
  position:relative;
`;

const SliderContainer = styled.div`
  width: 300%;
  height:100vh;
  display: flex; //이미지들을 가로로 나열합니다.
  img{
      width:100%;height:98vh;
  }
  div{
      width:100%;height:100%;border:1px solid #000;
  }
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
  position:relative;top:-150px;
`;

const TOTAL_SLIDES = 2;

const SliderInch = ({}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
        };
        const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide*33.33333333333}%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentSlide]);

    return (
        <Container>
          {currentSlide}
          <SliderContainer ref={slideRef}>
            {/* <img src="http://www.upskin.co.kr/images/main/special/1.jpg" />
            <img src="http://www.upskin.co.kr/images/main/special/2.jpg" />
            <img src="http://www.upskin.co.kr/images/main/special/3.jpg" /> */}
            <div>
                <img src="http://www.upskin.co.kr/images/main/special/1.jpg" />
            </div>
            <div>
                <img src="http://www.upskin.co.kr/images/main/special/2.jpg" />
            </div>
            <div>
                <img src="http://www.upskin.co.kr/images/main/special/3.jpg" />
            </div>
            
          </SliderContainer>
          <Button onClick={prevSlide}>Previous Slide</Button>
          <Button onClick={nextSlide}>Next Slide</Button>
        </Container>
    );

        
}


// SliderInch.propTypes = {
//     slideData: PropTypes.array.isRequired,
// };


export default SliderInch;