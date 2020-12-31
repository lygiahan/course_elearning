import { Avatar, Popover, Tabs, Typography } from 'antd';
import React from 'react'
import classes from './AdminPage.module.scss';
import { Layout, Menu } from 'antd';
import Loading from '../../../component/Loading'
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
import { Link, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { logoutAct } from '../../../action/user';
const { Header, Content, Footer, Sider } = Layout;
let {SubMenu} = Menu;
export default function AdminPage() {
   const dispatch =useDispatch();
   const history = useHistory();
  const stateAdmin = useSelector(state => state.AdMinReducer);
  let{loadinglogin,crentialadmin}= stateAdmin;
  console.log(stateAdmin);
      
     const logout =()=>{
          dispatch(logoutAct(history));
     }
     if(loadinglogin){
       return <Loading />
     }
      
    return (
        <Layout className={classes.admin}>
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
        <Menu.Item key="7" icon={<UploadOutlined />}>
          Khóa Học Chờ Ghi Danh
        </Menu.Item>
       
      
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className={classes.admin__header}  style={{ padding: 0 ,height:'auto'}} >
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 2em'}}>
              <Typography.Title style={{color:"#86ba09"}}>Wel Come to Admin</Typography.Title>
              <Popover placement="bottom" 
                      content={
                      <div>
                           <Menu  >
                               <Menu.Item onClick={logout}>Đăng Xuất</Menu.Item>
                            </Menu> 
                      </div>} 
                      trigger={['click','hover']}>
                   <Avatar style={{cursor:'pointer'}} size={80}>{crentialadmin? crentialadmin.hoTen:''}</Avatar>
              </Popover>
            </div>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
       
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
        </Layout>
    )
}
