import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailCourse } from '../../action/course';
import {Row,Col, Typography, Button} from 'antd';
import classes from './DetailCourse.module.scss';
import { CheckOutlined, EyeOutlined, StarFilled, TeamOutlined } from '@ant-design/icons';
import Footer from '../../layouts/Footer';
import { addCart } from '../../action/cart';
import Loading from '../../component/Loading';
export default function DetailCourse() {
       const {id} = useParams();
       const dispatch = useDispatch();
       const state = useSelector(state => state.CourseReducer);
       let {loadingDetail,detail} = state;
         let {tenKhoaHoc,moTa,luotXem,ngayTao,soLuongHocVien} = detail;

       useEffect(()=>{
             dispatch(detailCourse(id));
       },[id])
       useEffect(()=>{
          localStorage.setItem('recentCourse',JSON.stringify([state.detail]))
       },[id,state.detail])
       if(loadingDetail){
           return <Loading />
       }


        const addToCart=(data)=>{          
                dispatch(addCart(data));        
           
        }
    return (
     <>
        <section className={classes.detail}>
            <div className={classes.top__left}>
               <Row style={{backgroundColor:"#1e1e1c",padding:'4rem'}}>
                    <Col md={16}>
                        <div className={classes.detail__top__left}>
                            <Typography.Title level={1} className={classes.detail__top__title}>{tenKhoaHoc}</Typography.Title>
                            <Typography.Text className={classes.detail__top__des}>{moTa}</Typography.Text>
                            <div style={{display:'flex'}}>

                            <ul className={classes.detail__icon__list}>
                                <li><StarFilled /></li>
                                <li><StarFilled /></li>
                                <li><StarFilled /></li>
                                <li><StarFilled /></li>
                                <li><StarFilled /></li>
                            </ul>
                            <div style={{display:'flex',padding:0}}>
                                <Typography.Text style={{color:'#fff'}}><EyeOutlined /> {luotXem}</Typography.Text>
                                <Typography.Text style={{marginLeft:'1rem',color:'#fff'}}><TeamOutlined /> ({soLuongHocVien})</Typography.Text>
                            </div>

                            </div>
                            {/* <div>
                               <Typography.Text className={classes.detail__top__author}> Tác Giả: </Typography.Text>
                            </div> */}
                            <div style={{marginTop:'0.4em'}}>
                             <Typography.Text className={classes.detail__top__date}> Ngày Tạo: {ngayTao}</Typography.Text>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}></Col>
               </Row>

            </div>
            <div className={classes.detail__content}>
                <Row className={classes.detail__content__row}>
                    <Col sm={24} md={17} className={classes.detail__content__row__left}>
                      <div className={classes.detail__content__row__left__item}>
                         <Typography.Title level={3} underline>Bạn sẽ học được gì</Typography.Title>
                           <Row gutter={[16,16]}>
                               <Col md={12}><Typography.Text><CheckOutlined /> Có hiểu biết cơ bản về ngôn ngữ lập trình {tenKhoaHoc}. </Typography.Text></Col>
                               <Col md={12}><Typography.Text><CheckOutlined /> Có kỹ năng và hiểu biết về Python để tự tin ứng tuyển vào các công việc lập trình {tenKhoaHoc} </Typography.Text></Col>
                               <Col md={12}><Typography.Text><CheckOutlined /> Có được các kỹ năng {tenKhoaHoc} tiên quyết để chuyển sang các ngành cụ thể - Học máy, Khoa học dữ liệu, v.v. </Typography.Text></Col>
                               <Col md={12}><Typography.Text> <CheckOutlined />Thêm các kỹ năng Lập trình hướng đối tượng (OOP) {tenKhoaHoc} vào lý lịch của bạn. </Typography.Text></Col>
                               <Col md={12}><Typography.Text> <CheckOutlined />Hiểu cách tạo các chương trình {tenKhoaHoc} của riêng bạn. </Typography.Text></Col>
                               <Col md={12}><Typography.Text> <CheckOutlined />Học {tenKhoaHoc} từ các nhà phát triển phần mềm chuyên nghiệp có kinh nghiệm. </Typography.Text></Col>

                           </Row>
                      </div>
                    </Col>
                    <Col sm={24} md={7} className={classes.detail__content__row__right}>
                        <div className={classes.detail__content__row__right__item}>
                              <img className={classes.detail__content__row__right__item__img} src={detail.hinhAnh}/>
                              <div className={classes.body__right}>
                                <div style={{padding:'0'}}>
                                 <span>
                                    <Typography.Text delete style={{fontSize:'2rem'}}>2.000.000đ</Typography.Text>
                                 </span>
                                 <span style={{marginLeft:8}}>
                                       <Typography.Text mark strong style={{fontSize:'2.5rem'}}>Miễn phí</Typography.Text>
                                 </span>
                                </div>
                                <Button shape="round" className={classes.body__right__btnadd} loading={false} onClick={()=>addToCart(detail)}>
                                    <Typography.Title level={4}>Thêm Giỏ Hàng</Typography.Title>
                                </Button>
                                 <ul >
                                     <h2>Khóa học này bao gồm:</h2>
                                     <li>60 giờ video</li>
                                     <li>15 bài</li>
                                     <li>20 bài tập</li>
                                     <li>Truy cập trọn đời</li>
                                     <li>Giấy chứng nhận hoàn thành</li>

                                 </ul>
                              </div>
                        </div>           
                    </Col>
                </Row>
            </div>
        </section> 
        <Footer />
    </>
    )   
}
