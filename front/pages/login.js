import React,{ useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import Link from 'next/link';
import useInput from '../hooks/useinput';

const LoginWrapper = styled.div`
    position:absolute; 
    top:50%; left:50%;
    margin-top:-300px; margin-left:-300px; 
    width:600px; height:600px;
    border:1px solid RGB(120,120,120);
    h1{
        text-align:center;margin-top:20px;
    }
    input{
        width:85%;margin-left:7.5%;border:0.5px solid RGB(200,200,200);height:50px;margin-top:20px;
        padding-left:15px;
    }
    input[type=submit]{
        color:white;
        border:0;
        padding-left:0;
        font-weight:bold;
        background: #4776E6;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    
`;

const Login = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);
    
    useEffect(()=>{
    },[me]);

    const onSubmitForm = useCallback((e)=>{
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
        });
    },[email, password]);

    return (
        <>
            <LoginWrapper>
                <h1>아이디 : {me}</h1>
                <form onSubmit={onSubmitForm}>
                    <input name="user-email" placeholder="아이디" type="text" onChange={onChangeEmail}/>
                    <input name="user-password" placeholder="비밀번호" type="password" onChange={onChangePassword} />
                    <input type="submit" value="로그인하기" />
                </form>
                <center>
                    <br/>
                    <Link href="./register"><p>회원가입 하기</p></Link>
                </center>
            </LoginWrapper>
        </>
    )
};

export default Login;