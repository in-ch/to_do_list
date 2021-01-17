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
    width:50%;height:100%;position:fixed;top:0px;right:0px;background:red;display:none;
    @media (max-width: 521px) {
        display:block;
    }
    p{
        display:block;margin:20px;
    }
`;

const style = {
    default : {
        transition: '.25s all',
    },
    show : {
        right: '-50%',
    }
};

const Header = ({menuText}) => {
    const [mobileShow, setMobileShow] = useState(false);
    const mobileShowEvent = useCallback(()=>{
        console.log('hi');
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
                    {menuText.map(v => (
                        <Link href={v.src} rel="noopener noreferrer" target="_blank">
                            <a>
                                <p>{v.text}</p>
                            </a>
                        </Link>
                    ))}
                </MenuWrapperDesktop>
                <MobileLine onClick={mobileShowEvent}  >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </MobileLine>

                <MenuWrapperMobile style={Object.assign({}, style.default, !mobileShow && style.show)}>
                    {menuText.map(v => (
                        <Link href={v.src} rel="noopener noreferrer" target="_blank">
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

Header.PropTypes = {
    menuText : PropTypes.arrayOf.isRequired,
}

export default Header;