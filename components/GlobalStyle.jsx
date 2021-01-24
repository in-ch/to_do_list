import styled, { createGlobalStyle } from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');    
    
    *{
        font-family: 'Noto Sans KR', sans-serif;margin:0;padding:0;
    }
    a{
        text-decoration:none;color:black;
    }
    input,textarea{
        outline:0;
    }
`;

export default GlobalStyle;