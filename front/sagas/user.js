import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_IN_REQUEST
} from '../reducers/user';

function logInAPI(data) {
    return axios.post(`/user`,data);
  }
  
  function* logIn(action) {
    try {
      const result = yield call(logInAPI, action.data);
      yield put({
        type: LOG_IN_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOG_IN_FAILURE,
        error: err.response.data,
      });
    }
  }


function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}
  
  export default function* userSaga() {
    yield all([
      fork(watchLogIn),
    ]);
  }