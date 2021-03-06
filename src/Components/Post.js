import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ADD_POSTS, DELETE_POST, GET_POSTS } from '../saga_redux/types'
import PostContainer from './PostContainer'
import style from './Post.module.css'

function Post(props) {

    useEffect(()=>{
        props.getPosts()
    },[])

    const[details,setDetails]=useState({})

    const handleChange=(e)=>{
            setDetails({
                ...details,
                [e.target.name]:e.target.value
            })
    }

    const handleClick=(e)=>{
           props.addPosts(details) 
        
    }
 
    return (
        <div className={style.body}>
            <form className={style.body} onSubmit={handleClick}>
            <input type="text" name="title" onChange={handleChange}  className={style.input} required="required"></input>
            <textarea  type="text" name="comment" onChange={handleChange} placeholder="write your comments in 200 words" 
            className={style.textarea} maxLength="200" required="required" ></textarea>
            <button className={style.button}> click</button>
            </form>
             <PostContainer 
             post={props.post}
             deletePost={props.deletePost}/>
          
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        post:state.post
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getPosts:() => {
            dispatch({type: GET_POSTS});
          },
        addPosts:(details)=>{
            dispatch({type:ADD_POSTS,value:details})
        },
        deletePost:(id)=>{
            dispatch({type:DELETE_POST,value:id})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)
