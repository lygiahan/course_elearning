import React, { useEffect, useState } from 'react'
import { Col, Row,Avatar } from 'antd'
import {useDispatch} from 'react-redux';
import classes from './FormInfo.module.scss';
import { updateUserAct } from '../../../action/user';
export default function FormInfo({infoUser}) {

    const dispatch = useDispatch();
    const [disabled,setDisabled] = useState(true);
    const [info,setInfo] = useState({
        taiKhoan:'',
        matKhau:'',
        hoTen:'',
        soDT:'',
        maNhom:'',
        email:''
     })

         useEffect(()=>{
           if(infoUser){
            setInfo(infoUser)
           }
    },[infoUser])

    const handleChange =(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const onSubmit =(e)=>{
          e.preventDefault();
          if(disabled){
            let newUser={...info,maLoaiNguoiDung:'HV'};
            dispatch(updateUserAct(newUser))
          }
          else{

          }
    }
 
    return (
        <form onSubmit={onSubmit} className={classes.form}>
        <Row className={classes.form__row}>
            <Col md={24} style={{textAlign:'center'}} >
                 <Avatar size={100} >{info.hoTen}</Avatar>
            </Col>
            <Col md={24}>
                  <label htmlFor="taiKhoan">Tài Khoản</label>
            </Col>
            <Col md={24}>
                  <input disabled={true} type="text" name="taiKhoan"onChange={handleChange} value={info.taiKhoan}/>
            </Col>

            <Col md={24}>
                  <label  htmlFor="matKhau">Mật Khẩu</label>
            </Col>
            <Col md={24}>
                  <input disabled={disabled}  type="password" name="matKhau"onChange={handleChange} value={info.matKhau}/>
            </Col>

            <Col md={24}>
                  <label htmlFor="hoTen">Họ Tên</label>
            </Col>
            <Col md={24}>
                  <input disabled={disabled}  type="text" name="hoTen"onChange={handleChange} value={info.hoTen}/>
            </Col>

            <Col md={24}>
                  <label htmlFor="Số Điện Thoại">Số Điện Thoại</label>
            </Col>
            <Col md={24}>
                  <input disabled={disabled}  type="text" name="soDT"onChange={handleChange} value={info.soDT}/>
            </Col>

             <Col md={24}>
             <select disabled={disabled}  value={info.maNhom} onChange={handleChange}>
                   <option value="GP01">GP01</option>
                   <option value="GP02">GP02</option>
                   <option value="GP03">GP03</option>
                   <option value="GP04">GP04</option>
                   <option value="GP05">GP05</option>
                   <option value="GP06">GP06</option>
                   <option value="GP07">GP07</option>
                   <option value="GP08">GP08</option>
                   <option value="GP09">GP09</option>

             </select>
             </Col>
             <Col md={24} style={{textAlign:'center'}}>
                 {disabled  ?
                 <button type='submit' onClick={()=>setDisabled(!disabled)} className={classes.form__btnadd}>Sửa</button>
                 :
                 <button  type='submit' onClick={()=>setDisabled(!disabled)} className={classes.form__btnadd}>Cập Nhật</button>
                                }
             </Col>
        </Row>
    </form>
    )
}
