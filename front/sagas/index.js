import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { backUrl } from '../config/config.js';

// import postSaga from './post';
import userSaga from './user';

axios.defaults.baseURL = 'http://52.78.106.219';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    // fork(postSaga),
    fork(userSaga),
  ]);
}