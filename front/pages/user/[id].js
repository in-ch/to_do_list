// post/[id].js  -> 다이나믹 라우팅임. 
import React from 'react';
import {useRouter} from 'next/router';
import { END } from 'redux-saga';
import { LOAD_USER_INFO_REQUEST } from '../../reducers/user';
import axios from 'axios';
import wrapper from '../../store/configureStore';
import { useDispatch, useSelector } from 'react-redux';

const UserInfo = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>{id}번째 게시글</div>
    )
};

// 다이나믹 페이지에서 getStaticProps를 쓰면 에러 메시지를 내놓기 때문에, getStaticPath와 같이 써야함. getStaticPath는 미리 어떤 정보를 넣을 것인지 알려주는 것이다. 따라서 제한을 두는 역할을 할 때 쓰일 수 있음. 

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {    // 접속한 상황에 따라 데이터가 바뀌면 getServerSideProps를 쓰고 데이터가 바뀔 일이 없으면 getStaticProps를 씀. 웬만하면 getServerSideProps를 씀,,
    const cookie = context.req ? context.req.headers.cookie : '';                    // 걍 블로그글 같이 글 내용이 잘 안바뀌면 getStaticProps가 좋음. 
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_USER_INFO_REQUEST,
      data: context.params.id,  // 이렇게 값을 넘길 수 있음. 혹은 context.query.id로 써도됨. 
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise(); //sagaTask는 configureStore.js에 정의해놨음. 
});


export default UserInfo;

