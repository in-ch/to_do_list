import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');    
    
    *{
        font-family: 'Noto Sans KR', sans-serif;margin:0;padding:0;
    }
    a{
        text-decoration:none;color:black;
    }
    
`;

export default GlobalStyle;