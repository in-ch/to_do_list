import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;height:100%;text-align:center;
    .sns{
        background:RGB(100,100,100);width:100%;height:30%;
        img{
            width:50px;margin-top:20px;margin-left:10px;margin-right:10px;
        }
    }
    .footerADiv{
        background:RGB(50,50,50);width:100%;height:30%;
        p{
            padding-left:3%;padding-right:3%;display:inline-block;color:white;font-size:1.3em;opacity:0.5;margin-top:35px;border-right:1px solid white;border-left:1px solid white;
            &:hover{
                opacity:1;
            }
            @media (max-width: 550px) {
                font-size:0.7em;margin-top:20px;
            }
        }
    }
    .logoDiv{
        width:100%;height:30%;
        h2{
            position:relative;top:33px;
        }
    }
    .copyRight{
        width:100%;height:10%;text-align:Center;color:RGB(170,170,170);
    }
`;
const STYLED = {
    footer:{
        width:'100%',
        height:'320px',
        marginTop:'100px',
    }
}

const Footer = () => {
    return (
        <>  
            <footer style={STYLED.footer}>
                <Wrapper>
                    <div className="sns">
                    <img src="/icons/instaIcon.png" />
                    <img src="/icons/facebookIcon.png" />
                    <img src="/icons/twitIcon.png" />
                    <img src="/icons/youtubeIcon.png" />
                    <img src="/icons/etcIcon.png" />
                    </div>
                    <div className="footerADiv">
                        <p>개인정보 처리방침</p>
                        <p>환자의 권리와 의무</p>
                        <p>이용약관</p>
                        <p>비급여 항목별 진료비 안내</p>
                        <p>네트워크 가입문의</p>
                    </div>
                    <div className="logoDiv">
                        <center>
                            <h2>타임라인 피부과</h2>
                        </center>
                    </div>
                    <div className="copyRight">
                        <p>@CopyRight 2020 by tigredosud</p>
                        <p>ALL RIGHT RESERVED</p>
                        <br/>
                    </div>
                </Wrapper>
            </footer>
        </>
    )
};

export default Footer;