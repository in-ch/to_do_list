import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header.jsx';

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;