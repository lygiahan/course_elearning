import { Button, Card, Col, Typography } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {EyeOutlined, StarFilled, TeamOutlined} from '@ant-design/icons'
import {useDispatch} from 'react-redux';
import classes from './Course.module.scss';
import { addCart } from '../../action/cart';
export default function Course({course}) {
    const dispatch = useDispatch();
    let {maKhoaHoc,hinhAnh,tenKhoaHoc,moTa,luotXem,ngayTao,nguoiTao,soLuongHocVien,} = course;


    const addToCard=(data)=>{
         dispatch(addCart(data))
    }
    return (
        <Col xs={12} sm={8} md={6}>     
         <Link to={`/category/detail/${maKhoaHoc}`}>
         <Card className={classes.course} 
         bordered={false} hoverable 
         cover={<img style={{height:180,borderTopLeftRadius:15,borderTopRightRadius:15,objectFit:'cover'}} src={hinhAnh}/>}>
             <Card.Meta className={classes.course__detail}  title={<h2 className={classes.course__title}>{tenKhoaHoc}</h2>} description={
                 (
                    <div className={classes.course__detail__body}>
                        <p>{moTa.slice(0,50)+'...'}</p>
                                        <div style={{display:'flex',justifyContent:'space-between',padding:0}}>
                                            <p><EyeOutlined /> {luotXem}</p>
                                            <p><TeamOutlined /> ({soLuongHocVien})</p>
                                        </div>
                                       <div className={classes.course__detail__body__detail}>
                                            <ul className={classes.icon__list}>
                                                <li><StarFilled /></li>
                                                <li><StarFilled /></li>
                                                <li><StarFilled /></li>
                                                <li><StarFilled /></li>
                                                <li><StarFilled /></li>
                                            </ul>
                                            <div style={{padding:'0'}} className={classes.detail__mobi}>
                                                <span>
                                                     <Typography.Text delete >2.000.000đ</Typography.Text>
                                                </span>
                                                <span style={{marginLeft:8}}>
                                                     <Typography.Text mark strong>Miễn phí</Typography.Text>
                                                </span>
                                            </div>
                                       </div>
                                    <div className={classes.course__detail__btn}>
                                        <Link to="/">
                                             <Button onClick={()=>addToCard(course)} 
                                              className={classes.course__detail__btnadd}>Thêm</Button>
                                        </Link>
                                    </div>
                                 </div>
                                 
                                )
                                 }>

                                 </Card.Meta>                                                  
                              </Card>
         </Link>                   
        </Col>
    )
}
