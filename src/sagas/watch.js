import {watchGetUsers} from './definition'



export default function * rootSaga () {
    yield [
      watchGetUsers()
    ]
  }