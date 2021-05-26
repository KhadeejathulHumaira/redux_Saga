import React from 'react'
import style from  './Post.module.css'

function Post({post,title}) {
        
        const handleEdit=(e)=>{
            console.log(post)
            e.preventDefault()
        }

        const handleDelete=(e)=>{
            console.log("hum")
            e.preventDefault()
            
        }
    return (
        <div className={style.body}>
            <h3 className={style.h3}>{title}</h3>
            <div className={style.columns}>
            <p className={style.p}>{post}</p>
            <button className={style.button} onClick={handleEdit} >Edit</button>
            <button className={style.button} onClick={handleDelete} >Delete</button>
            </div>
           
        </div>
    )
}

export default Post
