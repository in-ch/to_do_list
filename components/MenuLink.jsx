import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width:800px;height:30px;margin: 0 auto;display:flex;border-left:0.1px solid RGB(200,200,200);
    div{
        flex:1;border-right:0.1px solid RGB(200,200,200);text-align:Center;
        p{
            font-size:1.2em;
        }
        
    }
    @media (max-width: 521px) {
        width:100%;
    }
`;

const MenuLink = ({MenuLinkData}) => {
    return(
        <>
            <Wrapper>
                {MenuLinkData.map((v,i)=>{
                    return (
                        <div key={v.text + v.i}>
                            <p>{v.text}</p>
                        </div>
                    );
                    
                })}
            </Wrapper>
        </>
    );
};

export default MenuLink;

MenuLink.propTypes = {
    MenuLinkData : PropTypes.arrayOf.isRequired,
}
