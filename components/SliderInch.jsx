import React, { useEffect, useRef,useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height:95%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
  position:relative;
  .arrowRight{
      width:5%;position:absolute;top:45%;right:1.5%;opacity:0.6;transition: all 0.2s ease-in-out; 

      &:hover{
        opacity:1;
        right:1%;
      }
  }
  .arrowLeft{
    width:5%;position:absolute;top:45%;left:1.5%;opacity:0.6;transition: all 0.2s ease-in-out;

    &:hover{
        opacity:1;left:1%;
    }
  }
`;

const SliderContainer = styled.div`
  width: 300%;
  height:100vh;
  display: flex; //이미지들을 가로로 나열합니다.
  img{
      width:100%;height:98vh;
  }
  div{
    transition: all 2s ease-in-out;position:relative;
    table{
        width:50%;height:50vh;position:fixed;background:RGBA(0,0,0,0.2);left:25%;overflow:hidden;transition: all 1s ease-in-out;
        @media (max-width: 520px) {
            width:70%;height:50vh;left:15%;
        }
    }
  }
`;
const SlideWrapper = styled.div`
    width:100%;height:100%;overflow:hidden;
    div{
        width:100%;height:100%;background-repeat: no-repeat;background-size: cover;background-position: top center;
    }
`;

const SliderRemote = styled.div`
    width:100%;height:10vh;position:absolute;top:90%;
    @media (max-width: 520px) {
        width:100%;height:10vh;top:90%;
    }
    span{
        display:inline-block;background:RGBA(0,0,0,0.5);width:20px;height:20px;margin:10px;border-radius:10px;transition: all 0.5s ease-in-out;
    }

`;
const style = {
    default:{
    },
    slideImg:{
        transform : 'scale(1)',
    },
    slideImgOn:{
        transform : 'scale(1.2)',
    },
    slideText:{
        top: '100%',
    },
    slideTextOn:{
        top: '25%',
    },
    remoteOn:{
        width: '40px',background:'#4776E6',
    },
    remote:{
    },
};

const TOTAL_SLIDES = 2;

const SliderInch = ({slideData}) => {
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

    const moveSlide = useCallback((i) => {
        setCurrentSlide(i);
        console.log(i);
    });


    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        const NUM = Number(100) / (Number(TOTAL_SLIDES)+Number(1));
        slideRef.current.style.transform = `translateX(-${currentSlide*NUM}%)`;
    }, [currentSlide]);

    return (
        <Container>
          <SliderContainer ref={slideRef}>
                {slideData.map((v,i)=>(
                    <>
                        <SlideWrapper key={i} style={Object.assign({}, style.default, currentSlide === i ? style.slideImgOn : style.slideImg )}>
                            <div style={{backgroundImage: v.src}}>
                                <table style={Object.assign({}, style.default, currentSlide === i ? style.slideTextOn : style.slideText )}>

                                </table>
                            </div>
                        </SlideWrapper>
                    </>
                ))}
          </SliderContainer>
          <SliderRemote>
              <center>
                    {slideData.map((v,i)=>(
                        <>
                            <span onClick={() => moveSlide(i)} style={Object.assign({}, style.default, currentSlide === i ? style.remoteOn : style.remote )}/>
                        </>
                    ))}
              </center>
          </SliderRemote>
          <img onClick={nextSlide} className="arrowRight" src="/icons/rightIcon.svg"/>
          <img onClick={prevSlide} className="arrowLeft" src="/icons/leftIcon.svg"/>
        </Container>
    );

        
}


SliderInch.propTypes = {
    slideData: PropTypes.array.isRequired,
};


export default SliderInch;