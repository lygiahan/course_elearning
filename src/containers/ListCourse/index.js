import { Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import Course from '../Course'

export const   ListCourse =({courses}) =>{
    const stateCourse = useSelector((state) => state.CourseReducer);

    console.log(stateCourse);
    return (
        <Row gutter={[30,30]}>
            {stateCourse.courses?stateCourse.courses.map((course,index)=>{
                return <Course course={course} index={index}/>
            }):''}   
        </Row>
    )
}
