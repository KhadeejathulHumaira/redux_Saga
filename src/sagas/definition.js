import {takeEvery,call,put} from 'redux-saga/effects'
import {GET_USERS,SET_USERS} from '../saga_redux/types'
import Axios from 'axios'


 export function* watchGetUsers () {
    yield takeEvery(GET_USERS, workerGetUsers);
  }
  
  export function* workerGetUsers() {
    try {
      const uri = ' http://localhost:3001/posts';
      const result = yield call(Axios.get, uri);
      yield put({ type: SET_USERS, value: result.data });
      console.log("get")
    } 
    catch {
      console.log('Failed');
    }
    console.log("Heyjii")
    yield put({ type: SET_USERS, value: "humaiz"});
  } 
