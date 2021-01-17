import React from 'react';
import Head from 'next/head';
import propTypes from 'prop-types';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const App = ({Component}) => (
    <>
        <Head>
            <title>inch의 todolist</title>
        </Head>
        <Component />
    </>
);

App.PropTypes = {
    Component: propTypes.elementType.isRequired,
}
export function reportWebVitals(metric) {
    console.log(metric);
}
export default wrapper.withRedux(withReduxSaga(App));