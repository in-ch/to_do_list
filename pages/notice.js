import React from 'react';
import AppLayout from '../components/AppLayout';
import styled from 'styled-components';
import MenuLink from '../components/MenuLink.jsx';
import Table from '../components/Table.jsx';

const IMG_WRAPPER = styled.div`
    width:100%;height:300px;background-image:url("/imgs/typing.jpg");margin-top:70px;
    background-repeat: no-repeat;background-position:center;background-size:cover;top:-1px;
    display:table;
    p{
        display:table-cell;font-size:2em;color:white;vertical-align:middle;text-align:center;font-weight:bold;
        .subText{
            font-size:0.6em;color:RGBA(255,255,255,0.7);
        }
    }
`;
const UNDER_LINE = styled.div`
    width:60px;height:5px;background:#4776E6;margin-top:5px;margin-bottom:5px;
`;
const SUB_P = styled.div`
    font-size:0.9em;color:RGB(100,100,100);
`;

const Notice = () => {
    const MenuLinkData = [
        {"text":"텍스트1","link":""},
        {"text":"텍스트2","link":""},
        {"text":"텍스트3","link":""},
    ];

    return (
        <>  
            <AppLayout>
                <IMG_WRAPPER>
                    <p>ONLINE CONSULTING<br/><span className="subText">자세히 상담해드립니다.</span></p>
                </IMG_WRAPPER>
                <br/>
                <MenuLink MenuLinkData={MenuLinkData}/>
                <center>
                    <br/><br/>
                    <h1>의료 상담</h1>
                    <UNDER_LINE />
                    <SUB_P>타임라인과 함께한 시술 이야기를 들어보세요.</SUB_P>
                    <br/><br/><br/>
                    <Table />
                </center>
            </AppLayout>
        </>
    )
};

export default Notice;
