import React,{ useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import Link from 'next/link';
import useInput from '../hooks/useinput';
import axios from 'axios';
// import wrapper from '../store/configureStore';
// import { END } from 'redux-saga';

const ImgUploader = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <p>Hello</p>
            </div>
        </>
    )
};

export default ImgUploader;

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     const cookie = context.req ? context.req.headers.cookie : '';
//     axios.defaults.headers.Cookie = '';
//     if (context.req && cookie) {
//         axios.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch({
//       type: LOAD_MY_INFO_REQUEST,
//     });
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise(); //sagaTask는 configureStore.js에 정의해놨음. 
// });

