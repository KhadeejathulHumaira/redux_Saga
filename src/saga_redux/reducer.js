import { SET_USERS} from './types'



const userReducer = (state=[],action)=>{
    switch(action.type){
        case SET_USERS:
            return [...action.value]
        default :  return state
            
    }
}

export default userReducer