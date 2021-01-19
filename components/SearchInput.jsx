import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const Search = styled.div`
    width:80%;height:25px;margin:0 auto;padding-left:3%;padding-right:3%;margin-top:30px;outline:none;border-radius:10px;border:0;background:white;padding-top:6px;

    input[type=text] { 
        outline:0;border:0;width:80%;position:relative;top:-4px;
    }
    
`;

const SearchButton = styled.div`
    width:20px;height:20px;display:inline-block;float:right;position:relative;
    background-repeat: no-repeat;background-position:center;background-size:cover;top:-1px;
`;

const style = {
    defaults : {
        backgroundImage: 'url("/icons/search.svg")',
    },
    clicked : {
        backgroundImage: 'url("/icons/loading.gif")',
    }
};

const SearchInput = ({}) => {
    const timeout = useRef();
    const [clicked, setClicked] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const searchChange = useCallback((e) => {
        setSearchValue(e.target.value);
    });
    const searchClick = useCallback(() => {
        setClicked(!clicked);
        setSearchValue('');
        timeout.current = setTimeout(() => {
            setClicked(false);
        }, 1500);
    });
    

    return (
        <>
            <Search>
                <input type="text" onChange={searchChange} value={ searchValue } placeholder="검색어를 입력해주세요." />
                <SearchButton onClick={searchClick} style={Object.assign({}, style.defaults, clicked && style.clicked ) } />
            </Search>
        </>
    );
};

export default SearchInput;