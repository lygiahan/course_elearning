import { ShoppingFilled } from '@ant-design/icons';
import { Badge, Button, Drawer, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './DrawerHeader.module.scss';
export default function DrawerHeader(props) {
    return (
        <Drawer
          title={
            <Typography.Title level={2}>
            <Link to="/" style={{color:'#86ba09'}}>HLY</Link>
          </Typography.Title>
          }
          closable={false}
          onClose={props.onClose}
          visible={props.visible}
          placement="left"
        >
         <ul className={classes.drawer__list}>
             <li><Link to="/">Trang Chủ</Link></li>
             <li><a href="#">Thể Loại</a></li>
            <li>
             <Badge count={props.stateCart.length} showZero>
                <Link to={'/cart'}>
                    <ShoppingFilled size={60} className={classes.drawer__cart}/>
                </Link>
            </Badge>
            </li>
            <li>
               <Button className={classes.drawer__btnregister}>
                   <Link to="/register">Đăng Ký</Link>
              </Button>
            </li>
            <li>
            <Button className={classes.drawer_btnlogin}>
                    <Link to="/login">Đăng Nhập</Link>
             </Button>
            </li>
         </ul>
        </Drawer>
    )
}
