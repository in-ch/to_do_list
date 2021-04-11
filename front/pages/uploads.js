import React,{ useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_IMAGES_REQUEST} from '../reducers/upload';
import Link from 'next/link';
import useInput from '../hooks/useinput';
import axios from 'axios';
// import wrapper from '../store/configureStore';
// import { END } from 'redux-saga';

const ImgUploader = () => {
    const dispatch = useDispatch();
    // const { imagePaths } = useSelector((state) => state.upload);
    
    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
          imageFormData.append('image', f);
        });
        dispatch({
          type: UPLOAD_IMAGES_REQUEST,
          data: imageFormData,
        });
    }, []);
    
    return (
        <>
            <div>
                <form onSubmit={uploadImg} encType="multipart/form-data">
                    <input type="file"  onChange={onChangeImages} />
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

