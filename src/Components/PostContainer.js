import React from 'react'
import style from './PostContainer.module.css'

function PostContainer(props) {
   

   const handleDelete=(e)=>{
       props.deletePost(e.target.id)
   }

    
    return (
        <div className={style.body}>
            {props.post && props.post.map((item,index)=>
            <div key={index} className={style.columns} >
           
                <div className={style.commentbox}>
                <h3 className={style.h3} >{item.title}</h3>
                <p className={style.p}>{item.comment}</p>

                </div>
                
                <button  id={item.id}className={style.button}onClick={handleDelete}>Delete</button>
               
            </div>)}
            
    
        </div>
    )
}

export default PostContainer
