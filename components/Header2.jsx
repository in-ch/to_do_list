import React, {useCallback, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from './SearchInput.jsx';

const HeaderDiv = styled.div`
    width:100%;height:70px;position:fixed;top:0px;left:0px;background:white;z-index:2;
    .headerInner {
        width:1000px;height:50px;margin:0 auto;
        @media (max-width: 520px) {
            width:100%;overflow:hidden; 
        }
    }
`;

const Logo = styled.div`
    width:100px;height:40px;float:left;margin-top:15px;border-right:1px solid #000;
`;
const MenuWrapperDesktop = styled.div`
    height:70px;border-bottom:1px solid RGB(200,200,200);position:relative;
    
    div{
        display:inline-block;
    }
    @media (max-width: 520px) {
        display:none;
    }
    p{
        display:inline-block;margin-left:20px;margin-right:20px;margin-top:20px;font-weight:bold;height:70px;
    }
    .loadingHeader{
        position:fixed;top;0px;left:0px;width:100%;height:2px;background: #4776E6;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`;
const MobileLine = styled.div`
    // cursor:pointer;
    width:35px;
    height:25px;
    position:relative;
    top:10px;
    left:-5px;
    float:right;
    display:none;
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
    @media (max-width: 521px) {
        display:block;
    }
    
`;
const MenuWrapperMobile = styled.div`
    width:80%;height:100%;position:fixed;top:0px;right:0px;background:RGBA(255,255,255,0.6);display:none;z-index:3;overflow:hidden;
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
        height:24%;
        margin: 0;border:0;
        z-index:2;
        @media (max-width: 281px) {
            height:28%;
        }
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
            display:table;width:98%;height:70px;border-bottom:0.5px solid RGB(200,200,200);
            border-right:0.2px solid RGB(200,200,200);
        }
        p{
            width:100%;margin:0;height:70px;color:RGB(150,150,150);vertical-align:middle;display:table-cell;
            @media (max-width: 281px) {
                font-size:0.8em;
            }
        }
        .subSubMenu{
            position:absolute;top:0px;right:80px;background:none;height:100%;padding-top:20px;background:white;overflow:hidden;
            @media (max-width: 281px) {
                right:30px;
                h3{
                    font-size:1em;
                }
            }
            h3{
                color:#4776E6;position:relative;left:-7%;
            }
            a{
                display:block;height:30px;border:0;
            }
            p{
                text-align:left;font-size:1.2em;height:30px;display:inline-block;
                @media (max-width: 281px) {
                    font-size:1em;
                }
            }
            
            img{
                width:30px;display:inline-block;
            }
        }
    }
`;
const CustomBr = styled.div`
    width:100%;height:1px;background:none;
`;
const SubMenuDesktop = styled.div`
    width:100%;background:white;position:fixed;top:71px;left:0px;overflow:hidden;
    .imgWrapper{
        width:300px;height:150px;display:inline-block;border:1px solid #000;float:left;
    }
    .SubMenuDesktopWrapper{
        width:1000px;height:100px;margin:0 auto;display:table;
    }
    .p{
        display:table-cell;
    }
`;

const style = {
    default : {
        transition: '.25s all',
    },
    show : {
        right: '-80%',
    },
    aDefault : {
    },
    aClick : {
    },
    aClickOn : {
        background:'white',color:'#4776E6',boxShadow: '-5px 0px 0px 0px white, 5px 0px 0px 0px white',transition: '.3s all',
    },
    subMenuDefault : {
    },
    subMenuOn : {
        width:'65%',transition: '.5s all',
    },

    subMenu : {
        width: '0%'
    },
    subMenuDesktopDefault: {},
    subMenuDesktopHover: {
        height:'155px',
        transition: '.3s all',
        opacity:1,
    },
    subMenuDesktop: {
        height:'0px',
        transition: '.3s all',
        opacity:0,
    },
    loading:{
        width:'0px'
    },
    loadingOn:{
        width: '100%'
    },
};


const Header = ({menuText}) => {
    const [mobileShow, setMobileShow] = useState(false);
    const [subShow, setSubShow] = useState(0);
    const [subShowHover, setSubShowHover] = useState(-1);
    const [loadingHeader, setLoadingHeader] = useState(false);
    // const timeoutHeader = useRef();
    
    useEffect(()=>{
        setLoadingHeader(!loadingHeader);
    },[subShowHover]);
    
    const mobileShowEvent = useCallback(()=>{
        setMobileShow(!mobileShow); 
    });
    const menuActive = useCallback((i) => {
        setSubShow(i);
    });
    const onHoverEvent = useCallback((i) => {
        setSubShowHover(i);
    });
    const onLeaveEvent = useCallback(()=>{
        setSubShowHover(-1);
    });

    
    return (
        <HeaderDiv>
            <div className="headerInner">
                <Logo><h2>타임라인</h2></Logo>
                <MenuWrapperDesktop>
                    {menuText.map((v,i) => (
                        <>
                            <div onMouseLeave={()=> onLeaveEvent(i)} onMouseEnter={()=> onHoverEvent(i)}>
                                <Link href={v.src}>
                                    <a rel="noopener noreferrer" target="_blank">
                                        <p>{v.text}</p>
                                    </a>
                                </Link>
                                <SubMenuDesktop style={Object.assign({}, style.subMenuDesktopDefault, subShowHover === i ? style.subMenuDesktopHover : style.subMenuDesktop )}>
                                    <div className="SubMenuDesktopWrapper">
                                        <div className="imgWrapper">
                                        </div>
                                        {v.sub.map((n) => (
                                            <a rel="noopener noreferrer" target="_blank" href={n.src}>
                                                <p>{n.text}</p>
                                            </a>
                                        ))}
                                    </div>
                                </SubMenuDesktop>
                            </div>
                        </>
                    ))}

                    <div class="loadingHeader" style={Object.assign({}, style.default, loadingHeader ? style.loadingOn : style.loading )} />
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
                    

                    <SubMenu>
                        <div>
                            {menuText.map((v,i) => (
                                <>
                                    <a onClick={() => menuActive(i)}>
                                        <p style={Object.assign({}, style.aDefault, subShow === i ? style.aClickOn : style.aClick) }>{v.text}</p>
                                    </a>
                                    <div className="subSubMenu">
                                        <h3>{v.text}</h3>
                                        <br/>
                                        <CustomBr/><CustomBr/><CustomBr/><CustomBr/><CustomBr/>
                                        <p>첫번째 텍스트</p>
                                        <CustomBr/>
                                        <p>첫번째 텍스트</p>
                                        <CustomBr/>
                                        <p>첫번째 텍스트</p>
                                        <CustomBr/>
                                        <p>첫번째 텍스트</p>
                                        <CustomBr/>
                                        <p>첫번째 텍스트</p>
                                        <CustomBr/>
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