import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';

const BestChoiceBox = styled.div`
    width:20%;padding-bottom:28%;border:1px solid #000;display:inline-block;margin: 0 0 15px 15px;position:relative;
    div:nth-child(1){
        width:100%;height:75%;background:red;position:Absolute;top:0px;left:0px;
    }
    div:nth-child(2){
        width:100%;height:22%;position:Absolute;bottom:0px;left:0px;text-align:center;padding-top:5%;
        p{
            margin-top:5px;
        }
        p:nth-child(1){
            font-size:1.4em;font-weight:bold;
        }
        p:nth-child(2){
            font-size:1em;color:RGB(100,100,100);
        }
    }
    @media (max-width: 521px) {
        width:40%;margin: 0 0 25px;padding-bottom:50%
    }
`;

const BestChoiceBoxSecond = styled.div`
    width:20%;padding-bottom:28%;border:1px solid #000;display:inline-block;margin: 0 0 15px 15px;position:relative;
    div:nth-child(2){
        width:100%;height:75%;background:red;position:Absolute;bottom:0px;left:0px;
    }
    div:nth-child(1){
        width:100%;height:22%;position:Absolute;top:0px;left:0px;text-align:center;padding-top:5%;
        p{
            margin-top:5px;
        }
        p:nth-child(1){
            font-size:1.4em;font-weight:bold;
        }
        p:nth-child(2){
            font-size:1em;color:RGB(100,100,100);
        }
    }
    @media (max-width: 521px) {
        width:40%;margin: 0 0 25px;padding-bottom:50%
    }
`;

const BestChoice = () => {
    
    return(
        <>
            <br/><br/>
            <center>
                <BestChoiceBox>
                    <div>

                    </div>
                    <div>
                        <p>여드름</p>
                        <p>여드름치료의 역사를 만듭니다.<br/>여드름/자국/흉터 복합치료 연구개발</p>
                    </div>
                </BestChoiceBox>
                <BestChoiceBoxSecond>
                    <div>
                        <p>여드름</p>
                        <p>여드름치료의 역사를 만듭니다.<br/>여드름/자국/흉터 복합치료 연구개발</p>
                    </div>
                    <div>
                        
                    </div>
                </BestChoiceBoxSecond> 
                <BestChoiceBox>
                    <div>

                    </div>
                    <div>
                        <p>여드름</p>
                        <p>여드름치료의 역사를 만듭니다.<br/>여드름/자국/흉터 복합치료 연구개발</p>
                    </div>
                </BestChoiceBox>
                <BestChoiceBoxSecond>
                    <div>
                        <p>여드름</p>
                        <p>여드름치료의 역사를 만듭니다.<br/>여드름/자국/흉터 복합치료 연구개발</p>
                    </div>
                    <div>
                        
                    </div>
                </BestChoiceBoxSecond> 
            </center>
        </>
    );
};

export default BestChoice;