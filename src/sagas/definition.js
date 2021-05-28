import {takeEvery,call,put} from 'redux-saga/effects'
import {ADD_POSTS, DELETE_POST, GET_POSTS,SET_POSTS} from '../saga_redux/types'
import Axios from 'axios'

// Fetch the posts from the server
 export function* watchGetPosts () {
    yield takeEvery(GET_POSTS, workerGetPosts);
  }
  
  export function* workerGetPosts() {
    try {
  
      const uri = '   http://localhost:3001/posts';
      const result = yield call(Axios.get, uri);
      yield put({ type: SET_POSTS, value: result.data });
      console.log("get")
    } 
    catch {
      console.log('Failed');
    }
  } 
  

// To add the posts to the server
  export function * watchAddPosts(){
    yield takeEvery(ADD_POSTS,addPosts)
  }


  export function * addPosts(action){
    try{
      const uri = '  http://localhost:3001/posts';
      const res= yield call(Axios.post,uri,action.value)
      yield put({type:GET_POSTS})
      alert("successfully added")
    }
    catch{
      console.log(" post failed")
    }
  }

  //To delete the post 

export function * watchDeletePost(){
  yield takeEvery(DELETE_POST,delPosts)
}

export function * delPosts(action){
  try{
    const uri = `http://localhost:3001/posts/${action.value}`;
    const del=yield call(Axios.delete,uri)
    yield put({type:GET_POSTS})
    console.log("Successfully Deleted")
  }
  catch{
    console.log("deletion failed")
  }
}