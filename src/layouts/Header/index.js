import React, { Fragment, useState } from 'react'
import { Col, Layout, Row, Typography,Input,Button, Badge, Popover, Menu, Dropdown, Avatar, AutoComplete } from 'antd';
import classes from './Header.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {DownOutlined, ShoppingFilled, UnorderedListOutlined} from '@ant-design/icons';
import {Link, NavLink, useHistory} from 'react-router-dom';
import PopoverCart from '../../component/PopoverCart';
import DrawerHeader from '../../component/DrawerHeader';
import { logoutAct } from '../../action/user';
const { Header } = Layout;
export default function HeaderUI() {
   const dispatch = useDispatch();
   const history = useHistory();
   const stateCart = useSelector(state => state.CartReducer)
   const stateCourse =useSelector(state=>state.CourseReducer);
   const stateUser =useSelector(state =>state.UserReducer);
   const stateAdmin =useSelector(state =>state.AdMinReducer);
       const [visible,setVisible] = useState(false);
       let{courses} = stateCourse;
       let {userlogin,crentialUser} = stateUser;
       let {crentialadmin} = stateAdmin;
       const [option, setOption] = useState([]);

       
      const  showDrawer = () => {
         setVisible(!visible)
         };
   
      const  onClose = () => {
         setVisible(!visible)
      };
      
       const searchResult = (query) =>
       courses
         .filter(
           (fil) =>
             fil.tenKhoaHoc.toUpperCase().trim().indexOf(query.toUpperCase().trim()) !== -1
         )
         .map((item, idx) => {
           const category = `${item.tenKhoaHoc} `;    
           return {   
             value: category ,
             label: (
               <Link to={`/detail/${item.maKhoaHoc}`}>
               <div
                 key={idx}
                 style={{
                   display: "flex",
                   justifyContent: "space-between",
                 }}
               >                
                  <ul>              
                      <li style={{color:'black'}}>{item.tenKhoaHoc}</li> 
                  </ul>
               </div>
               </Link>
   
             ),
           };
         });

         const handleSearch = (value) => {
            setOption(value ? searchResult(value) : []);
          };
          const onSelect = (value) => {
          
          };

     const menuCategory =(
        <Menu >
            {stateCourse.filtercourse?stateCourse.filtercourse.map((item,index)=>{
              return <Menu.Item key={index}><Link to={`/category/${item.maDanhMuc}`}>{item.tenDanhMuc}</Link></Menu.Item> 
            }):[]}
        </Menu>
     )
     const logOut =()=>{
         dispatch(logoutAct(history));
     }

     const popoverUser =(
        <Menu >
              <Menu.Item ><Link to="/user">Thông Tin</Link></Menu.Item>
              <Menu.Item onClick={logOut}>Đăng xuất</Menu.Item>
        </Menu>
     )

    return (
        <Fragment>
                <Header className={classes.header}>

                      {crentialadmin ? <>
                         
                      </>:
                      
                      <Fragment>
                          <nav>
                         
                         <Row className={classes.header__row}>
                           <Col xs={20} md={2} style={{display:'flex',alignItems:'center'}}>
                            <div className={classes.logo}>
                                 <Typography.Title level={2}>
                                    <Link to="/" style={{color:'#86ba09'}}>HLY</Link>
                                 </Typography.Title>
                            </div>                       
                           </Col>
                           <Col xs={4} md={4} className={classes.toggle}>
                                <UnorderedListOutlined onClick={showDrawer}/>                             
                           </Col>
 
                           <DrawerHeader 
                           menuCategory={menuCategory}
                              onChange={onchange} 
                              userlogin={userlogin}
                              stateCart={stateCart} 
                              visible={visible}
                              logOut={logOut} 
                              crentialadmin={crentialadmin}
                              onClose={onClose}/>
 
 
                           <Col md={16} className={classes.nav__list__mobile}>
                               <ul className={classes.nav__list}>
                                 <li className={classes.nav__list__item}>
                                    <Link to="/" className={classes.nav__list__item__link}>Trang Chủ</Link>
                                 </li>
                                 
                                 <li className={classes.nav__list__item}>
                                 <Dropdown overlay={menuCategory} trigger={['click']}>
                                       <p className={classes.nav__list__item__link} style={{cursor:'pointer'}}>Thể Loại<DownOutlined /></ p>
                                 </Dropdown>               
                                 </li>
                                 <li className={classes.nav__list__item}>
                                 <Link to="/course/All" className={classes.nav__list__item__link}>Khóa học</Link>
                                 </li>
                                 <li className={classes.nav__list__item }>
                                    <div className={classes.nav__search}>
                                    <AutoComplete
                                       options={option}
                                       dropdownMatchSelectWidth={252}
                                       onSelect={onSelect}
                                       onSearch={handleSearch}
                                       style={{width:'100%',borderRadius:'15px'}}
                                        >
                                          <Input.Search                                      
                                             placeholder="Tim khoa hoc"
                                             allowClear
                                             size="large"                                          
                                             loading={false}
                                             enterButton
                                             className={classes.nav__search__input}
                                             >                                      
                                          </Input.Search>
                                    </AutoComplete> 
                                    </div>
                                 </li>
                               </ul>
                           </Col>
                           <Col xs={24} md={6} className={classes.nav__right} >
                               <Popover placement="bottomLeft"  content={<PopoverCart stateCart={stateCart}/>} trigger={['hover','click']}>
                                 <Badge  count={stateCart.length} showZero>
                                     <Link to={'/cart'}>
                                           <ShoppingFilled size={60}className={classes.nav__right__cart}/>
                                     </Link>
                                 </Badge>
                               </Popover>
                                {userlogin ?
                                <Popover placement="bottom" content={popoverUser} trigger={['hover','click']}>
                                  <Avatar 
                                        style={{cursor:'pointer'}} 
                                        size={44}> 
                                        {<Link to='/user'>
                                           <Typography.Title 
                                              level={1} 
                                              style={{textTransform:'uppercase'}}>
                                              {crentialUser.taiKhoan.slice(0,1)}
                                        </Typography.Title>
                                        </Link>}
                                     </Avatar>
                                  </Popover>:
                                 <>
                                  <Button className={classes.nav__right__btnregister}>
                                    <Link to="/register">Đăng Ký</Link>
                                 </Button>
                                 <Button className={classes.nav__right_btnlogin}>
                                     <Link to="/login">Đăng Nhập</Link>
                                 </Button>
                                 </>}
 
                           </Col>
                         </Row>
                     
                       </nav>
                         </Fragment>}
                     
                </Header>
        </Fragment>
    )
}
