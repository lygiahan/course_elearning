import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  infoUserAct } from '../../action/user';
import Loading from '../../component/Loading'
import TabUser from '../../component/User/TabUser';
import Footer from '../../layouts/Footer';
import classes from './UserPage.module.scss';
export default function UserPage() {
  const dispatch = useDispatch();
  const stateUser = useSelector(state => state.UserReducer);
  let {loadingInfo,infoUser,updateUser} = stateUser;
    useEffect(()=>{
        dispatch(infoUserAct());
      
    },[updateUser])

    if(loadingInfo){
        return <Loading/>
    }
    return (
        <Fragment>
            <section className={classes.user}>
           <div className={classes.user__tab}>
                <TabUser infoUser={infoUser}/>
           </div>
        </section>
        <Footer />
        </Fragment>
    )
}
