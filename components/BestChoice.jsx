import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';

const BestChoiceBox = styled.div`
    width:20%;padding-bottom:25%;border:1px solid #000;;display:inline-block;margin: 0 0 15px 15px;position:relative;
    div:nth-child(1){
        width:100%;height:50%;background:red;
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

                    </div>
                </BestChoiceBox>
                     
                <BestChoiceBox /> 
                <BestChoiceBox /> 
                <BestChoiceBox /> 
            </center>
        </>
    );
};

export default BestChoice;