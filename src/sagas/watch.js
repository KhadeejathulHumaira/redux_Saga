import {watchGetPosts, watchAddPosts, watchDeletePost} from './definition'
import {fork} from 'redux-saga/effects'



export default function * rootSaga () {
    yield fork(watchGetPosts)
    yield fork(watchAddPosts)
    yield fork(watchDeletePost)
  }