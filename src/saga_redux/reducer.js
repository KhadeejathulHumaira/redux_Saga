import { SET_POSTS} from './types'



const postReducer = (state=[],action)=>{
    switch(action.type){
        case SET_POSTS:
            return [...action.value]
        default :  return state
            
    }
}

export default postReducer