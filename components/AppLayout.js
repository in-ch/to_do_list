import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Header2 from './Header2.jsx';
import styled from 'styled-components';

const MainContentWrapper = styled.div`
    height:100px;width:100%;max-width:1000px;margin:0 auto;
`;

const AppLayout = ({ children }) => {
    const menuText = [
        {"src":"http://naver.com","text":"Home","sub":[{"text":"menu1","src":"http://naver.com"},{"text":"menu2","src":"http://naver.com"},{"text":"menu2","src":"http://naver.com"}]},
        {"src":"http://naver.com","text":"Login","sub":[{"text":"menu221","src":"http://naver.com"},{"text":"menu222","src":"http://naver.com"},{"text":"menu223","src":"http://naver.com"}]},
        {"src":"http://naver.com","text":"Setting","sub":[{"text":"menu331","src":"http://naver.com"},{"text":"menu332","src":"http://naver.com"},{"text":"menu333","src":"http://naver.com"}]},
    ];

    return (
        <>
            <Header2 menuText={menuText}/>
            <MainContentWrapper>
                {children}
            </MainContentWrapper>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default AppLayout;