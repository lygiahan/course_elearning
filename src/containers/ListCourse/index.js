import { Row } from 'antd'
import React from 'react'
import Course from '../Course'

export const   ListCourse =({courses}) =>{
    return (
        <Row gutter={[30,30]}>
            {courses.map((course,index)=>{
                return <Course course={course} index={index}/>
            })}   
        </Row>
    )
}
