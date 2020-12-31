import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({component:Component,...rest}) {
    return (
       <Route {...rest} render={props=>{
            let token  = localStorage.getItem('token')
            let userlogin = localStorage.getItem('adminlogin')
            if(token && userlogin ){
                return <Component {...rest}/>
            }
            return <Redirect to='/'/>
        }
    }/>
    )
}
