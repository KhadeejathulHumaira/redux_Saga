import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addPostToDb, fetchPosts } from '../redux/Post_redux/Action'



function Posts({post,fetchPost}) {

    useEffect(()=>{
        fetchPost()
       
    },[])

    const [comment,setComment]=useState({})
    const handleChange=(e)=>{
            setComment({
                ...comment,
                [e.target.name]:e.target.value
            })
    }
 
    const handleClick=()=>{
        addPostToDb(comment)
        console.log(comment)
    }
    console.log(post)
    return (
        <div>
            {post && post.post && post.post.map((item,index)=>
            <div key={index}>
                <h1 >{item.title}</h1>
                <h2>{item.comment}</h2>
            </div>)}
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        post:state.post
    }
}
const mapDispatchToProps=(dispatch)=>{
    
    return{
        fetchPost:()=>dispatch(fetchPosts()),
        addPostToDb:()=>dispatch(addPostToDb())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
