import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
    return (
        <div>
            <h2>Home</h2>
            <h2>menu2</h2>
            <h2>menu3</h2>
            { children }
        </div>
    );
};

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;