import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;height:350px;background-image:url(/imgs/bg.jpg);
    background-repeat: no-repeat;background-size: cover;background-position: top center;
    @media (max-width: 940px) {
        height:500px;
    }
    .inner{
        min-width:1000px;width:70%;height:100%;display:flex;
        @media (max-width: 940px) {
            width:100%;min-width:0px;
        }
    }
    .headingWrapper{
        flex:3;
        @media (max-width: 940px) {
            display:none;
        }
        .heading{
            font-weight:bold;color:white;font-size:2.5em;margin-top:120px;
        }
        .quickConsultation{
            color:black;opacity:0.2;margin-top:10px;font-size:2em;font-weight:bold;letter-spacing:-3px;
        }
    }
    .contentWrapper{
        flex:7;
        @media (max-width: 940px) {
            width:100%;
        }
        .consultingBox{
            width:300px;height:30px;float:left;margin-top:20px;margin-left:20px;
            @media (max-width: 940px) {
                width:95%;height:80px;margin-left:0px;
            }
            p{
                width:50px;display:inline-block;height:30px;border-bottom:1px solid white;color:white;font-size:0.9em;text-align:left;
            }
            input{
                padding-left:10px;padding-top:5px;width:200px;height:40px;font-size:1.2em;position:relative;margin-left:10px;border: 0;position:relative;top:3px;
            }
        }
        .textareaWrapper{
            width:72%;height:210px;margin-top:40px;float:left;margin-left:30px;
            @media (max-width: 940px) {
                width:75%;height:80px;
            }
            textarea{
                width:100%;height:130px;float:left;padding-left:4%;padding-top:20px;font-size:1.2em;
            }
            input[type=checkbox]{
                width:20px;height:20px;margin-top:8px;float:left;
            }
            p{
                display:inline-block;color:White;font-weight:bold;float:left;position:relative;top:9px;left:10px;
            }
            input[type=button]{
                width:104%;height:40px;background:RGB(50,50,50);margin-top:10px;border:0;color:white;font-weigh:bold;font-size:1.2em;padding-top:3px;
            }
        }
    }

`;
const MainPageOnlineConsulting = () =>{
    return (
        <>
            <center>
                <Wrapper>
                    <div className="inner">
                        <div className="headingWrapper">
                            <p className="heading">전화 상담신청</p>
                            <p className="quickConsultation">QUICK   CONSULTATION</p>
                        </div>
                        <div className="contentWrapper">
                            <div className="consultingBox">
                                <p>이름</p>
                                <input type="text" placeholder="ex)OOO" />
                            </div>
                            <div className="consultingBox">
                                <p>연락처</p>
                                <input type="number" placeholder="01012345678" />
                            </div>
                            <div className="textareaWrapper"> 
                                <textarea placeholder="상담 내용" />
                                <input type="checkbox" />    
                                <p>개인정보취급방침</p>
                                <input type="button" value="상 담 신 청" />
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </center>
            <br/>
        </>
    )
};

export default MainPageOnlineConsulting;