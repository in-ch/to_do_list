import React from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
    width:1090px;
    @media (max-width: 521px) {
        width:100%;
    }
`;
const TableComponent = styled.table`
    width:1100px;font-size:0.8em;
    @media (max-width: 521px) {
        width:100%;
        font-size:0.6em;
    }
    text-align:center;
    table{
        display: table;
        border-collapse: separate;
        box-sizing: border-box;
    }
    thead{
        display: table-header-group;vertical-align: middle;
    }
    tbody{
        display:table-row-group;vertical-align:middle;
        tr{
            color:RGBA(0,0,0,0.6);transition: 0.2s all ease-in-out;
            &:hover{
                color:black;
            }
        }
    }
    tr{
        border-bottom:1px solid #000;display:table-row;border:1px solid #000;
    }
    td{
        height:50px;border-bottom:1px dotted #b3b3b3;opacity:0.7;
        p{
            border-left:0.1px solid RGB(200,200,200);
            @media (max-width: 521px) {
                border: 0;
            }
            &:hover{
                opacity:1;
            }
        }
    }
    p{
        text-overflow:ellipsis;
    }
    .mobileNone{
        @media (max-width: 521px) {
            display:none;
        }
    }
`;
const WriteButton = styled.input`
    width:120px;height:40px;background:white;display:block;margin-top:20px;outline:0;border:2px solid #4776E6;color:#4776E6;font-weight:bold;text-align:center;
`;

const Input = styled.input`
    width:35px;height:35px;margin:10px;margin-top:25px;background:white;border:0.5px solid RGB(150,150,150);opacity:0.5;
    @media (max-width: 521px) {
        width:20px;height:20px;margin:5px;font-size:0.5em;margin-top:10px;
    }
    &:hover{
        opacity:1;
    }
`;

const style = {
    default:{},
    done:{
        color:'red',
    },
    prepare:{
        color:'blue'
    },
    clicked:{
        opacity:'1',
    }
}
const Table = () => {
    return (
        <>
            <Hr/>
            <TableComponent>
                <thead>
                    <tr>
                        <td className="mobileNone"><p>번호</p></td>
                        <td><p>지점</p></td>
                        <td><p>제목</p></td>
                        <td><p>작성자</p></td>
                        <td className="mobileNone"><p>작성일</p></td>
                        <td><p>답변상태</p></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.done }>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.1241241</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.prepare }>미답변</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.done }>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.done }>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.prepare }>미답변</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.prepare }>미답변</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.done }>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.done }>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.done }>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td style={ style.prepare }>미답변</td>
                    </tr>
                </tbody>
            </TableComponent>
            <Input type="button" value="<<" />
            <Input type="button" value="<" />
            <Input type="button" style={style.clicked} value="1" />
            <Input type="button" value="2" />
            <Input type="button" value="3" />
            <Input type="button" value="4" />
            <Input type="button" value="5" />
            <Input type="button" value=">" />
            <Input type="button" value=">>" />
            <WriteButton value="글 쓰 기" />
        </>
    );
};  

export default Table;