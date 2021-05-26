import React, { useEffect, useState } from 'react'

import style from './UserHome.module.css'
import {connect} from 'react-redux'
import { fetchPostFromDb} from '../redux/User/Action'



function User(props) {
    const[comment,setComment]=useState({})
    const handleChange=(e)=>{
      
      setComment({
          ...comment,
          [e.target.name]:e.target.value
      })
     
    }
    useEffect(()=>{
        props.fetchPostFromDb()
    },[])
  
  
   
    return (
        <div>
            <form className={style.body} >

            <input
            className={style.input}
            placeholder='Enter the title' 
            name="title" 
            onChange={handleChange}></input>

            <textarea 
            className={style.textarea}
            placeholder="Enter your comments in 120 words" 
            name="post"  
            onChange={handleChange}
            rows="4" column="5"
            maxLength="120"></textarea>
            
            <button   className={style.button}
            >post</button>
            {
                props.post.map(item=><h1>{item.title}</h1>)
            }
            </form>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
      post:state.posts

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchPostFromDb:()=>dispatch(fetchPostFromDb())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User) 
