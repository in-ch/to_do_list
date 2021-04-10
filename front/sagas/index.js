import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { backUrl } from '../config/config.js';

// import postSaga from './post';
import userSaga from './user';
import uploadSaga from './upload';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    // fork(postSaga),
    fork(userSaga),
    fork(uploadSaga),
  ]);
}