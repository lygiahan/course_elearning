import { ShoppingFilled } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer, Menu, Popover, Typography } from 'antd'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classes from './DrawerHeader.module.scss';

export default function DrawerHeader(props) {
  const popoverUser =(
    <Menu >
          <Menu.Item ><Link to="/user">Thông Tin</Link></Menu.Item>
          <Menu.Item onClick={props.logOut}>Đăng xuất</Menu.Item>
    </Menu>
 )

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

            {props.userlogin ? 
             <Popover placement="bottom" content={popoverUser} trigger={['hover','click']}>
             <Avatar 
                   style={{cursor:'pointer'}} 
                   size={44}> 
                   {<Link to='/user'>
                      <Typography.Title 
                         level={1} 
                         style={{textTransform:'uppercase'}}>
                         {props.crentialUser? props.crentialUser.taiKhoan.slice(0,1):''}
                   </Typography.Title>
                   </Link>}
                </Avatar>
             </Popover>
            :<Fragment>
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
              </Fragment>}
            
         </ul>
        </Drawer>
    )
}
