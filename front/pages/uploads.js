import React,{ useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_IMAGES_REQUEST, CONTENT_UPLOAD_REQUEST} from '../reducers/upload';
import Link from 'next/link';
import useInput from '../hooks/useinput';
import axios from 'axios';

const ImgUploader = () => {
    const { imagePaths } = useSelector((state) => state.upload);
    const dispatch = useDispatch();
    const [text, onChangeText] = useInput('');

    const onChangeImages = useCallback((e) => {
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
          imageFormData.append('image', f);
        });
        dispatch({
          type: UPLOAD_IMAGES_REQUEST,
          data: imageFormData,
        });
    }, []);
    
    const onSubmitEvent = useCallback((e)=>{
        e.preventDefault();
        
        if(!text || !text.trim()){
            alert('텍스트를 입력해주세요.');
            return;
        } 
        const formData = new FormData();
            imagePaths.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', text);
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    },[text,imagePaths]);

    return (
        <>
            <div>
                <form onSubmit={onSubmitEvent} encType="multipart/form-data">
                    <textarea style={{width:200,height:200,margin:20,padding:20}} value={text} onChange={onChangeText} type="text" placeholder="하고 싶은 말을 입력해봐" />
                    <div style={{margin:20}}>
                        <input type="file" onChange={onChangeImages} />
                        <br/><br/>
                        <input type="submit" value={`전송하기`}/>
                    </div>
                </form>
            </div>
        </>
    )
};

export default ImgUploader;


