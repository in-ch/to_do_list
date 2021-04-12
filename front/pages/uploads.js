import React,{ useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_IMAGES_REQUEST} from '../reducers/upload';
import Link from 'next/link';
import useInput from '../hooks/useinput';
import axios from 'axios';

const ImgUploader = () => {
    const { imagePaths } = useSelector((state) => state.upload);
    const dispatch = useDispatch();
    
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
    
    return (
        <>
            <div>
                <form  encType="multipart/form-data">
                    <input type="file"  onChange={onChangeImages} />
                    <input type="submit" value={`전송하기`}/>
                </form>
            </div>
        </>
    )
};

export default ImgUploader;


