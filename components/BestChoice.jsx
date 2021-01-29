import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BestChoiceBox = styled.div`
    width:20%;padding-bottom:32%;display:inline-block;margin: 0 0 15px 15px;position:relative;
    div:nth-child(1){
        width:100%;height:75%;position:Absolute;top:0px;left:0px;overflow:hidden;
        div{
            width:100%;height:100%;
            background-image:${props => props.src };background-repeat: no-repeat;background-size: cover;background-position: top center;
        }
    }
    div:nth-child(2){
        width:100%;height:22%;position:Absolute;bottom:0px;left:0px;text-align:center;padding-top:5%;
        p{
            margin-top:5px;
        }

        p:nth-child(1){
            font-size:1.4em;font-weight:bold;
            @media (max-width: 521px) {
                font-size:1.2em;
            }
        }
        p:nth-child(2){
            font-size:1em;color:RGB(100,100,100);
            @media (max-width: 521px) {
                font-size:0.6em;
            }
        }
    }
    @media (max-width: 521px) {
        width:45%;margin: 0 0 25px;padding-bottom:75%;
    }
    &:hover{
        div:nth-child(1){
            div{
                transform: scale(1.2);transition :all 0.5s ease-in-out;
            }
        }
        p:nth-child(1){
            color:red;transition :all 0.5s ease-in-out;
        }
    }

`;


const BestChoiceBoxSecond = styled.div`
    width:20%;padding-bottom:32%;display:inline-block;margin: 0 0 15px 15px;position:relative;
    
    div:nth-child(2){
        width:100%;height:75%;position:Absolute;bottom:0px;left:0px;overflow:hidden;
        div{
            width:100%;height:100%;
            background-image:${props => props.src };background-repeat: no-repeat;background-size: cover;background-position: top center;
        }
    }
    div:nth-child(1){
        width:100%;height:22%;position:Absolute;top:0px;left:0px;text-align:center;padding-top:5%;
        p{
            margin-top:5px;
            @media (max-width: 521px) {
                position:relative;top:-17px;
            }
        }
        p:nth-child(1){
            font-size:1.4em;font-weight:bold;
            @media (max-width: 521px) {
                font-size:1.2em;
            }
        }
        p:nth-child(2){
            font-size:1em;color:RGB(100,100,100);
            @media (max-width: 521px) {
                font-size:0.6em;
            }
        }
    }
    @media (max-width: 521px) {
        width:45%;margin: 0 0 25px;padding-bottom:75%;margin-bottom:20px;
    }
    &:hover{
        div:nth-child(2){
            div{
                transform: scale(1.2);transition :all 0.5s ease-in-out;
            }
        }
        p:nth-child(1){
            color:red;transition :all 0.5s ease-in-out;
        }
    }
`;

const BestChoice = ({galleryData}) => {
    
    return(
        <>
            <center>
                <br/><br/><br/><br/><br/><br/>
                <img src="/imgs/bestchoice.png" style={{width:"250px",display:"block"}}/>
                <br/><br/><br/>
                {
                    galleryData.map((v,i)=>{
                        return(
                            <>
                                {v.type=="upper"?
                                    <BestChoiceBoxSecond src={v.src}>
                                        <div>
                                            <p>{v.heading}</p>
                                            <p>{v.text}<br/>{v.text2}</p>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </BestChoiceBoxSecond>
                                :
                                    <BestChoiceBox src={v.src}>
                                        <div>
                                            <div></div>
                                        </div>
                                        <div>
                                            <p>{v.heading}</p>
                                            <p>{v.text}<br/>{v.text2}</p>
                                        </div>
                                    </BestChoiceBox>
                                }
                            </>
                        );
                    })
                }
            </center>
        </>
    );
};

export default BestChoice;

BestChoiceBox.propTypes = {
    galleryData : PropTypes.arrayOf.isRequired,
}
