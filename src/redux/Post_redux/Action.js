import axios from 'axios'
import {ADD_POST, FETCH_POST} from  './Types'

export const fetchPostSuccess=(post)=>{
    return{
        type:FETCH_POST,
        payload:post
    }
}

export const addPost=(post)=>{
    return{
        type:ADD_POST,
        payload:post
    }
}

//To fetch the data from the DB
export const fetchPosts=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3001/posts')
        .then(res=>{
            const post= res.data
            dispatch(fetchPostSuccess(post))
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
}

// To post the comments and tittle inside the db
export const addPostToDb=(postIt)=>{
    return (dispatch)=>{
        dispatch(addPost(postIt))
        axios.post('http://localhost:3001/posts',postIt)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
}