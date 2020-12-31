import React, { Fragment } from 'react'
import {  Typography, Row, Col } from 'antd';
import classes from './LoginPage.module.scss';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { loginAct } from '../../action/user';
import Footer from '../../layouts/Footer';
export default function LoginPage() {
     const dispatch = useDispatch();
     const history = useHistory();
    const formik = useFormik({
      initialValues:{
        taiKhoan:'',
        matKhau:''
      },
      onSubmit:(value)=>{
        dispatch(loginAct(value,history));
      }
    })
      
    return (
    <Fragment>
  <section className={classes.login}>
           <div className={classes.form}>
    <form onSubmit={formik.handleSubmit}>
       <Row>
          <Col md={24}>
            <label  htmlFor="taiKhoan" ><Typography.Text>Tài Khoản</Typography.Text></label>
          </Col>
          <Col md={24}>
          <input 
            name="taiKhoan"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.taiKhoan}/>
          </Col>

          <Col md={24} className={classes.text__mk}>
            <label htmlFor="matKhau"><Typography.Text>Mật Khẩu</Typography.Text></label>
          </Col>
          <Col md={24}>
          <input 
            name="matKhau"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.matKhau}/>
          </Col>
          <Col md={24} className={classes.btnadd}>
            <button type="submit" className={classes.form__btnadd}><Typography.Text>Đăng Nhập</Typography.Text></button>
          </Col>
       </Row>
      
    </form>
           </div>

      </section>
      <Footer />
    </Fragment>
      
    )
}
