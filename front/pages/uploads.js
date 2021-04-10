import React,{ useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_REQUEST } from '../reducers/upload';
import Link from 'next/link';
import useInput from '../hooks/useinput';
import axios from 'axios';
// import wrapper from '../store/configureStore';
// import { END } from 'redux-saga';

const ImgUploader = () => {
    const dispatch = useDispatch();
    const { imagePaths } = useSelector((state) => state.upload);
    const uploadImg = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData();
        imagePaths.forEach((p) => {
          formData.append('image', p);
        });
        return dispatch({
          type: UPLOAD_REQUEST,
          data: formData,
        });
    },[imagePaths]);
    
    return (
        <>
            <div>
                <form onSubmit={ImgUploader} encType="multipart/form-data">
                    <input type="file"  />
                    <input type="submit" value={`전송하기`}/>
                </form>
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

