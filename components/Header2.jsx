import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from './SearchInput.jsx';

const HeaderDiv = styled.div`
    width:100%;height:50px;border:1px solid #000;

    .headerInner {
        width:1000px;height:50px;margin:0 auto;
        @media (max-width: 520px) {
            width:100%;overflow:hidden; 
        }
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
    margin-right:15px;
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
    width:80%;height:100%;position:fixed;top:0px;right:0px;background:white;display:none;z-index:3;overflow:hidden;
    @media (max-width: 521px) {
        display:block;
    }
    p{
        display:block;margin:20px;
    }
    .setting{
        width:20px;height:20px;margin:10px;margin-right:2px;float:right;
    }
    .x_icon{
        width:27px;height:27px;margin:10px;float:right;position:relative;top:-4px;
    }
    input[type=button]{
        background:none;border:0.2px solid white;color:white;margin:11px;font-size:0.4em;width:60px;height:25px;border-radius:10px;position:relative;top:-2px;
    }
    .gradient{
        background: #4776E6;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        width:100%;
        height:22%;
        margin: 0;border:0;
        z-index:2;
    }
    p{
        text-align:center;font-size:1.2em;color:white;line-height:5px;
    }
`;

const Cotton = styled.div`
    width:100%;height:100%;position:fixed;top:0px;left:0px;z-index:2;background:RGBA(0,0,0,0.2);display:none;
    @media (max-width: 521px) {
        display:block;
    }
`;

const SubMenu = styled.div`
    width: 100%;height: 78%;background:white;position:relative;
    div:nth-child(1){
        width:30%;height:100%;display:inline-block;background:RGB(245,245,245);text-align:center;
        a{
            display:table;width:98%;height:70px;border-bottom:0.5px solid RGB(200,200,200);background:RGB(245,245,245);
            box-shadow: none;border-right:0.2px solid RGB(200,200,200);transition: '.25s all',
        }
        p{
            width:100%;margin:0;height:70px;color:RGB(150,150,150);vertical-align:middle;display:table-cell;
        }
        .menuActiveLink{
            background:white;box-shadow: -5px 0px 0px 0px white, 5px 0px 0px 0px white;border-right:0;transition: '.25s all',
        }
        .subSubMenu{
            position:absolute;top:0px;right:0px;background:none;width:67%;height:100%;padding-top:20px;
            h3{
                position:relative;top:3px;
            }
            p{
                text-align:left;
            }
        }
    }
`;

const style = {
    default : {
        transition: '.25s all',
    },
    show : {
        right: '-80%',
    },
};

function removeAllClass(classs){
    for(let i =0;i<document.querySelectorAll(`p.${classs}`).length;i++){
        document.querySelectorAll(`p.${classs}`)[i].className = ''
    }
}
const Header = ({menuText}) => {
    const [mobileShow, setMobileShow] = useState(false);
    const mobileShowEvent = useCallback(()=>{
        setMobileShow(!mobileShow); 
    });
    const menuActive = useCallback((e) => {
        removeAllClass('menuActiveLink');
        e.target.classList.toggle("menuActiveLink");
    });


    return (
        <HeaderDiv>
            <div className="headerInner">
                <Logo><h2>타임라인</h2></Logo>
                <MenuWrapperDesktop>
                    {menuText.map((v,i) => (
                        <Link href={v.src} key={i} rel="noopener noreferrer" target="_blank">
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
                    <div className="gradient">
                        <input type="button" value="가입하기"/>
                        <img className="x_icon" onClick={mobileShowEvent} src="icons/x_icon.svg" />
                        <img className="setting" src="icons/setting.svg" />
                        <p>환영합니다.</p>
                        <p>인사오지게 박습니다.</p>
                        <SearchInput />
                    </div>
                    <SubMenu id="SubMenu">
                        <div>
                            {menuText.map((v,i) => (
                                <>
                                    <a id="aTag" onClick={menuActive}>
                                        <p key={i}>{v.text}</p>
                                    </a>
                                    <div className="subSubMenu">
                                        <center><h3>{v.text}</h3></center>
                                    </div>
                                </>
                            ))}
                        </div>
                    </SubMenu>
                    
                </MenuWrapperMobile>
            </div>
        </HeaderDiv>
    )
}

Header.propTypes = {
    menuText : PropTypes.array.isRequired,
}

export default Header;