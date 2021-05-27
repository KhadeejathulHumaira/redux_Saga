import {ADD_POST, FETCH_POST} from './Types'

const initialState={
    post:[],
    poster:false
}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_POST:
            return{
                posted:false,
                post:action.payload
            }
        case ADD_POST:
            return{
                
                post:state.post.push(action.payload)
            }
        default :return state
    }
}
export default postReducer