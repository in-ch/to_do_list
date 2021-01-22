import React, { useEffect, useRef,useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SlideWrapper = styled.div`
    width:100%;height:100%;display:inline-block;
`;
const Slide = ({background,data}) => {
    return (
        <>
            <SlideWrapper style={{background:'red'}} />
        </>
    );
}


Slide.propTypes = {
     slideData: PropTypes.array.isRequired,
};


export default Slide;