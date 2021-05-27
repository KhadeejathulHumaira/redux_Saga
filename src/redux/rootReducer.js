import postReducer from './Post_redux/Reducer'

import { combineReducers} from 'redux'

const rootReducer=combineReducers({
    post:postReducer
})

export default rootReducer