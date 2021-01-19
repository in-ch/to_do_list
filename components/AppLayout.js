import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Header2 from './Header2.jsx';

const AppLayout = ({ children }) => {
    const menuText = [
        {"src":"http://naver.com","text":"Home","sub":["a","b","c"]},
        {"src":"http://naver.com","text":"Login","sub":["a","b","c"]},
        {"src":"http://naver.com","text":"Setting","sub":["a","b","c"]},
    ];

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