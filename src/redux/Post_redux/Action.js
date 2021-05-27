import axios from 'axios'
import { FETCH_POST} from  './Types'

export const fetchPostSuccess=(post)=>{
    return{
        type:FETCH_POST,
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

