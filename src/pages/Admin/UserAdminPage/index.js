import React, { Fragment, useEffect } from 'react'
import { Avatar, Layout, Menu, Popover, Table, Typography } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import classes from './UserAdminPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAct } from '../../../action/admin';
import Loading from '../../../component/Loading';

const { Header, Content, Footer, Sider } = Layout;
let {SubMenu}  = Menu;
export default function UserAdminPage() {
      const dispatch = useDispatch();
      const stateUser = useSelector(state=>state.AdMinReducer);
      console.log(stateUser);
      let {loadinggetuser,getuser,crentialadmin} = stateUser;

  useEffect(()=>{
      dispatch(getUserAct())  
  },[])

    const columns =[
      {
        title:'Tài Khoản',
        dataIndex:'taiKhoan'
      },
      {
        title:'Họ Tên',
        dataIndex:'hoTen'
      },
      {
        title:'email',
        dataIndex:'email'
      },
      {
        title:'Số Điện Thoại',
        dataIndex:'soDt'
      },
      {
        title:'Mã Loại',
        dataIndex:'maLoaiNguoiDung',
        render:text=><Typography.Text>{text}</Typography.Text>
      }
    ]
    return (
        <Layout className={classes.pageUser}>
        <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
            >
 <div className="logo" />
 <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
  
   <SubMenu key="sub1" icon={<UserOutlined />} title={<Link style={{color:'#fff'}} to="/admin/user">Khách Hàng</Link> }>
              <Menu.Item key="3">Thêm Khách Hàng</Menu.Item>
              <Menu.Item key="4">Sửa Khách Hàng</Menu.Item>
    </SubMenu>
    <SubMenu key="sub1" icon={<UserOutlined />} title={<Link style={{color:'#fff'}} to="/admin/course">Khóa Học</Link> }>
              <Menu.Item key="5">Thêm Khóa Học</Menu.Item>
              <Menu.Item key="6">Sửa Khóa Học</Menu.Item>
     </SubMenu>
   <Menu.Item key="7" icon={<BarChartOutlined />}>
     nav 4
   </Menu.Item>

 </Menu>
</Sider>
<Layout className="site-layout" style={{ marginLeft: 200 }}>
<Header className={classes.pageUser__header}  style={{ padding: 0 ,height:'auto'}} >
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 2em'}}>
              <Typography.Title style={{color:"#86ba09"}}>Wel Come to Admin</Typography.Title>
              <Popover placement="bottom" 
                      content={
                      <div>
                           <Menu  >
                               <Menu.Item >Đăng Xuất</Menu.Item>
                            </Menu> 
                      </div>} 
                      trigger={['click','hover']}>
                   <Avatar style={{cursor:'pointer'}} size={80}>{crentialadmin? crentialadmin.hoTen:''}</Avatar>
              </Popover>
            </div>
      </Header>
 <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
   <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

     {loadinggetuser ? <Loading/>:
       <Fragment>
              <Typography.Title>Khách Hàng</Typography.Title>
              <Table dataSource={getuser} columns={columns}>
                    
              </Table>
       </Fragment>
     }
    
      
    </div>
     
    
 </Content>
 <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>
   </Layout>
    )
}
