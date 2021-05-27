import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GET_USERS } from '../saga_redux/types'

function UserNames(props) {

    useEffect(()=>{
        console.log("hey")
        props.getUsers()
    },[])
   console.log(props.users)
    return (
        <div>
          
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getUsers:() => {
            dispatch({type: GET_USERS});
          }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserNames)
