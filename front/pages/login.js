import React,{ useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import Link from 'next/link';

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
    const [id, setId] = useState('');
    const [ps, setPs] = useState('');
    const dispatch = useDispatch();

    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
        return;
    });

    const { me } = useSelector((state) => state.user);
    const onChangePs = useCallback((e)=>{
        setPs(e.target.value);
        return;
    });
    
    useEffect(()=>{
        console.log(me);
    },[me]);

    const onSubmitForm = useCallback((e)=>{
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: { id, ps },
        });
    },[id, ps]);


    return (
        <>
            <LoginWrapper>
                <h1>{me}</h1>
                <form onSubmit={onSubmitForm}>
                    <input placeholder="아이디" onChange={onChangeId}/>
                    <input type="password" onChange={onChangePs} placeholder="비밀번호" />
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