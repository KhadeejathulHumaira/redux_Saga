import axios from 'axios'
import {FETCH_POSTS} from './Types'


export const fetchPost=(post)=>{
    return{
        type:FETCH_POSTS,
        payload:post
    }
}

export const fetchPostFromDb=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3001/posts')
        .then(res=>{
            dispatch(fetchPost(res.data))
        })
    }
}