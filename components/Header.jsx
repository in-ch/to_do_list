import React, {useCallback, useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const HeaderDesktop = styled.div`
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
    .p{
        display:inline-block;margin-left;20px;margin-right:20px;
    }
`;

const MenuWrapperMobile = styled.div`
    width:50%;height:100%;position:fixed;top:0px;right:0px;background:red;display:none;
    @media (max-width: 521px) {
        display:block;
    }
    .p{
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

const Header = (menuText) => {
    const [mobileShow, setMobileShow] = useState(false);
    const mobileShowEvent = useCallback(()=>{
        setMobileShow(!mobileShow); 
    });


    return (
        <HeaderDesktop>
            <div className="headerInner">
                <Logo onClick={mobileShowEvent} />
                <MenuWrapperDesktop>
                    <p className="p">HOME</p>
                    <p className="p">로그인</p>
                    <p className="p">Setting</p>
                </MenuWrapperDesktop>
                
                <MenuWrapperMobile style={Object.assign({}, style.default, !mobileShow && style.show)}>
                    <p className="p">HOME</p>
                    <p className="p">로그인</p>
                    <p className="p">Setting</p>
                </MenuWrapperMobile>
            </div>
        </HeaderDesktop>
    )
}

Header.PropTypes = {
    menuText : PropTypes.string.isRequired,
}

export default Header;