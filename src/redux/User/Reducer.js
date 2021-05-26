import {FETCH_POSTS} from './Types'

const initialState={
    posts:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_POSTS :
            return{
                posts:action.payload
            }
    }
}

export default reducer