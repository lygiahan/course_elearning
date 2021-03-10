import React from 'react'
import {Row,Col, Popconfirm, Typography} from 'antd';
import classes from './CartPage.module.scss';
import { List, Avatar, Button } from 'antd';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { ToastCompo } from '../../component/ToastCompo';
import { deleteCart } from '../../action/cart';
import Footer from '../../layouts/Footer'
import { ghiDanh } from '../../action/user';
import { ArrowLeftOutlined } from '@ant-design/icons';
export default function CartPage() {

    const stateCart = useSelector(state => state.CartReducer);
    const stateUser = useSelector(state => state.UserReducer);
    
    let {loadingGhiDanh} = stateUser;

    const dispatch = useDispatch();   
     const  confirm =(e)=> {
       dispatch(deleteCart(e));
    }
    
    const  cancel = () =>{
      ToastCompo('success','Tạm dừng thành công')
    }

    const userAddCart =()=>{
         return  stateCart.map((item)=>{
            let tk =JSON.parse(localStorage.getItem('tk'));
            let local = localStorage.getItem('userlogin');
            let data={maKhoaHoc:item.maKhoaHoc,taiKhoan:tk};
                 if(!local ){
                    ToastCompo('fail','Vui Lòng Đăng Nhập Để Ghi Danh');
                 }
                 else{
                    dispatch(ghiDanh(data));
                 }
            })
    }
    return (
      <>
        <section className={classes.cart}>
             <div className={classes.cart__ban}></div>
              <div className={classes.cart__content}>
                  <Row gutter={[30,30]} className={classes.cart__content__row}>
                     <Col xs={24}  sm={24} md={18} className={classes.cart__content__row__order1}>
                     <List
                    className="demo-loadmore-list"
                    loading={false}
                    itemLayout="horizontal"
                    dataSource={stateCart}
                    bordered
                    renderItem={item => (
                <List.Item
                    className={classes.cart__content__row__order1__item}
                    actions={[ <Popconfirm  title="Bạn có muốn xóa không"
                    onConfirm={()=>confirm(item.maKhoaHoc)}
                    onCancel={cancel}
                    okText="Đồng ý"
                    cancelText="Không">
                     <Typography.Text type="danger" style={{cursor:'pointer'}}>Xóa</Typography.Text>
                    </Popconfirm>]}
                >
                    <List.Item.Meta
                        avatar={
                        <Avatar src={item.hinhAnh} size={100} shape="square"/>
                        }
                        title={<Link to={`${item.maKhoaHoc}`}>{item.tenKhoaHoc}</Link>}
                        description={<Typography.Text style={{width:'100%'}}>{item.moTa.slice(0,50)+'...'}</Typography.Text>}
                    />
                    <div style={{padding:'0'}} className={classes.mobile}>
                                                <span>
                                                     <Typography.Text delete >2.000.000đ</Typography.Text>
                                                </span>
                                                <span style={{marginLeft:8}}>
                                                     <Typography.Text mark strong>Miễn phí</Typography.Text>
                                                </span>
                     </div>
                </List.Item>
        )}
      />
                     </Col>
                     <Col xs={24} sm={24} md={6} className={classes.cart__content__row__order2}>
                        <Typography.Title type="success" level={1}>Tổng tiền:</Typography.Title>
                         <Typography.Title level={2}>0 đ</Typography.Title>
                         <Button shape="round" onClick={()=>userAddCart()} loading={loadingGhiDanh} className={classes.btnThanhToan}>Tiến hành thanh toán</Button>
                          <br></br>
                          <div>
                          <ArrowLeftOutlined />
                          <Link style={{color:'#6c757d',marginLeft:5}} to="/course/All">Tiếp tục ghi danh khóa học</Link>
                          </div>
                     </Col>
                  </Row>
              </div>
        </section>

        <Footer />
        </>
    )
}


