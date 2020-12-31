import { Button } from 'antd';
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { filterCourse } from '../../action/course';
import classes from './FilterCourse.module.scss';
export default function FilterCourse({item}) {
    const dispatch = useDispatch();

     const filter=(id)=>{
           dispatch(filterCourse(id));
     }
    return (
        <Fragment>
            <Button onClick={()=>filter(item.maDanhMuc)}  shape="round" className={classes.btnCategory}>{item.tenDanhMuc}</Button>
        </Fragment>
    )
}
