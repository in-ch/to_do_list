import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Header2 from './Header2.jsx';

const AppLayout = ({ children }) => {
    const menuText = [
        {"src":"http://naver.com","text":"Home"},
        {"src":"http://naver.com","text":"Login"},
        {"src":"http://naver.com","text":"Setting"},
    ]
    return (
        <>
            <Header2 menuText={menuText}/>
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default AppLayout;