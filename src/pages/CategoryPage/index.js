import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import { getCourseCategoryAct } from '../../action/course';
import classes from './CategoryPage.module.scss';
import CategoryItem from '../../component/CategoryItem';
import { Col, Row } from 'antd';
import Footer from '../../layouts/Footer'
import Loading from '../../component/Loading';
export default function CategoryPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const category = useSelector(state => state.CourseReducer)
    useEffect(()=>{
        dispatch(getCourseCategoryAct(id));
    },[id])
     if(category.loadingCategory){
         return <Loading />
     }
    return (
        <>
        <section className={classes.category}>
           <div className ={classes.category_content}>
               <Row gutter={[32,32]}>
                   {category.categoryPage.map((item,index)=>{
                       return (
                           <Col md={6}>
                             <CategoryItem course={item} index={index}/>
                           </Col>
                       )
                   })}
            </Row>
           </div>
        </section>

        <Footer />
        </>
    )
}
