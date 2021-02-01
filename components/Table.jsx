import React from 'react';
import styled from 'styled-components';

const TableComponent = styled.table`
    width:1000px;
    @media (max-width: 521px) {
        width:100%;
        font-size:0.6em;
    }
    text-align:center;
    table{
        display: table;
        border-collapse: separate;
        box-sizing: border-box;
        border-top:2px solid #000;
    }
    thead{
        display: table-header-group;vertical-align: middle;
    }
    tbody{
        display:table-row-group;vertical-align:middle;
    }
    tr{
        border-bottom:1px solid #000;display:table-row;border:1px solid #000;
    }
    td{
        height:50px;border-bottom:1px dotted #b3b3b3;
        p{
            border-left:0.1px solid RGB(200,200,200);
            @media (max-width: 521px) {
                border: 0;
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

const Table = () => {
    return (
        <>
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
                        <td>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.1241241</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td>답변완료</td>
                    </tr>
                    <tr>
                        <td className="mobileNone">1</td>
                        <td>어느 지점</td>
                        <td>어느 지점에 있는 이야기입니다.124124124124124124124124</td>
                        <td>적는 사람</td>
                        <td className="mobileNone">2020-12-31</td>
                        <td>답변완료</td>
                    </tr>
                </tbody>

            </TableComponent>
        </>
    );
};  

export default Table;