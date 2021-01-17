import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header.jsx';

const AppLayout = ({ children }) => {
    const menuText = [
        {"src":"http://naver.com","text":"Home"},
        {"src":"http://naver.com","text":"Login"},
        {"src":"http://naver.com","text":"Setting"},
    ]
    return (
        <>
            <Header menuText={menuText}/>
            {children}
        </>
    );
};

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;