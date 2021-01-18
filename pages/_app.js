import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';
import GlobalStyle from '../components/GlobalStyle.jsx'; 

const App = ({Component}) => (
    <>
        <Head>
            <title>inch의 todolist</title>
        </Head>
        <GlobalStyle />
        <Component />
    </>
);

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export function reportWebVitals(metric) {
    console.log(metric);
}
export default wrapper.withRedux(withReduxSaga(App));