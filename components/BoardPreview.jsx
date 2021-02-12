import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Board = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    width: 30%;height:370px;border-right:1px solid RGB(200,200,200);display:inline-block;margin: 0 auto;margin-top:30px;
    div{
        width:80%;height:100%;margin-top:2.5%;text-align:left;overflow:hidden;
        .heading{
            font-size:2em;font-weight:bold;
            &:hover{
                color:red;transition: all 0.2s ease-in-out;
            }
        }

        
        .notice_p{
            font-size:1.1em;margin-top:10px;width:100%;height:22px;display:flex;color:RGB(150,150,150);

            &:hover{
                text-decoration:underline;
            }
            p{
                display:inline-block;
                @media (max-width: 281px) {
                    font-size:0.7em;
                }
            }
            p:nth-child(1){
                flex:3;color:skyblue;
            }
            p:nth-child(2){
                flex:5;overflow:hidden;
            }
            p:nth-child(3){
                flex:3;
            }
        }
    }
    @media (max-width: 521px) {
        width:100%;margin-top:15px;
        div{
            width:95%;
        }
    }
`;

const plusBox = styled.div`
    width:20px;height:20px;border:1px solid #000;
`;
const Img = styled.img`
    margin-top:150px;display:block;width:250px;
    @media (max-width: 521px) {
        margin-top:50px;
    }
`;

export const BOARD_TYPE = {
    0: '[전체보기]',
    1: '',
    2: '',
    3: '',
    4: '',
};

export const NEW_TYPE = {
    0: '[전체지점]',
    1: '[명동점]',
    2: '[인천청라점]',
    3: '[청담점]',
    4: '[송도점]',
};

const BoardPreview = ({boardPreview, newPreview}) => {

    return (
        <>
            <center>
                <Img className="community" src="/imgs/community.png" />
                <Board>
                    <div>
                        <p className="heading">공지사항</p><br/>
                        <img src="/imgs/notice_img.jpg" />
                        {boardPreview.map((v,i)=>{
                            return(
                                <>
                                    <p className="notice_p">
                                        <p>{BOARD_TYPE[v.type]}</p>
                                        <p>{v.text}</p>
                                        <p>{v.data}</p>
                                    </p>
                                </>
                            );
                        })}
                    </div>
                </Board>
                <Board>
                    <div>
                        <p className="heading">뉴스&미디어</p><br/>
                        <img src="/imgs/media_img.jpg" />
                        {newPreview.map((v,i)=>{
                            return(
                                <>
                                    <p className="notice_p">
                                        <p>{NEW_TYPE[v.type]}</p>
                                        <p>{v.text}</p>
                                        <p>{v.data}</p>
                                    </p>
                                </>
                            );
                        })}
                    </div>
                </Board>
                <Board>
                    <div>
                        <p className="heading">With Star</p><br/>
                        <img src="/imgs/star_img.jpg" />
                    </div>
                </Board>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </center>
        </>
    )
};
export default BoardPreview;

BoardPreview.propTypes = {
    boardPreview: PropTypes.array.isRequired, 
    newPreview: PropTypes.array.isRequired
};