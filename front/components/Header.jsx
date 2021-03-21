import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const HeaderDiv = styled.div`
    width:100%;height:50px;border:1px solid #000;

    .headerInner {
        width:1000px;height:50px;margin:0 auto;
        @media (max-width: 520px) {
            width:100%;overflow:hidden; 
        }
    }
    a{
        text-decoration:none;color:black;
    }
`;
const Logo = styled.div`
    width:100px;height:50px;border:1px solid #000;float:left;
`;
const MenuWrapperDesktop = styled.div`
    width:200px;height:50px;border:1px solid #000;float:right;

    @media (max-width: 520px) {
        display:none;
    }
    p{
        display:inline-block;margin-left;20px;margin-right:20px;
    }
`;
const MobileLine = styled.div`
    // cursor:pointer;
    width:35px;
    height:25px;
    position:relative;
    top:6px;
    float:right;
    display:block;
    .line {
        background:black;
        margin-top:7px;
        margin-bottom:6px;
        width:35px;
        height:3px; 
        border-radius:2px;
        position:relative;
    }
`;
const MenuWrapperMobile = styled.div`
    width:50%;height:100%;position:fixed;top:0px;right:0px;background:white;display:none;z-index:3;
    @media (max-width: 521px) {
        display:block;
    }
    p{
        display:block;margin:20px;
    }
    .setting{
        width:20px;height:20px;margin:10px;float:right;
    }
    .x_icon{
        width:27px;height:27px;margin:10px;float:left;position:relative;top:-3px;
    }
`;


const Cotton = styled.div`
    width:100%;height:100%;position:fixed;top:0px;left:0px;z-index:2;background:RGBA(0,0,0,0.2);display:none;
    @media (max-width: 521px) {
        display:block;
    }
`;

const style = {
    default : {
        transition: '.25s all',
    },
    show : {
        right: '-50%',
    },
};


const Header = ({menuText}) => {
    const [mobileShow, setMobileShow] = useState(false);
    const mobileShowEvent = useCallback(()=>{
        setMobileShow(!mobileShow); 
    });
    useEffect(()=>{
        console.log(menuText);
    },[]);

    return (
        <HeaderDiv>
            <div className="headerInner">
                <Logo />
                <MenuWrapperDesktop>
                    {menuText.map((v,i) => (
                        <Link href={v.src} key={o} rel="noopener noreferrer" target="_blank">
                            <a>
                                <p>{v.text}</p>
                            </a>
                        </Link>
                    ))}
                    

                </MenuWrapperDesktop>
                {mobileShow&& <Cotton />}
                <MobileLine onClick={mobileShowEvent}  >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </MobileLine>

                <MenuWrapperMobile style={Object.assign({}, style.default, !mobileShow && style.show)}>
                    <img className="setting" src="icons/setting.svg" />
                    <img className="x_icon" onClick={mobileShowEvent} src="icons/x_icon.svg" />
                    <br/><br/>
                    {menuText.map((v,i) => (
                        <Link href={v.src} key={i} rel="noopener noreferrer" target="_blank">
                            <a>
                                <p>{v.text}</p>
                            </a>
                        </Link>
                    ))}
                </MenuWrapperMobile>
            </div>
        </HeaderDiv>
    )
}

Header.propTypes = {
    menuText : PropTypes.arrayOf.isRequired,
}

export default Header;