import './style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderUI from './layouts/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DetailCourse from './pages/DetailCourse';
import CartPage from './pages/CartPage';
import AdminPage from './pages/Admin/AdminPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReduxThunk } from './action/course';
import { ADMIN_LOGIN__SUCCESS, USER_LOGIN_SUCCESS } from './action/type';
import UserPage from './pages/UserPage';
import PrivateRoute from './PrivateRoute';
import Page404 from './pages/404';
import UserAdminPage from './pages/Admin/UserAdminPage';
import CourseAdminPage from './pages/Admin/CourseAdminPage';
import CategoryPage from './pages/CategoryPage';
function App() {
  const dispatch = useDispatch();
 
  useEffect(()=>{
         let token = localStorage.getItem('token');
         let userlogin = JSON.parse(localStorage.getItem('userlogin'));
         let adminlogin = JSON.parse(localStorage.getItem('adminlogin'));
       
         if(userlogin && token){
              dispatch(ReduxThunk(USER_LOGIN_SUCCESS,userlogin))
         }
         else{
              dispatch(ReduxThunk(ADMIN_LOGIN__SUCCESS,adminlogin))
        }
  },[])
  return (
    <>
      <Router>
       <HeaderUI/>
         <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/register" component={RegisterPage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/detail/:id" component={DetailCourse}></Route>
            <Route exact path="/cart" component={CartPage}></Route>
            <Route exact path="/user" component={UserPage}></Route>
            <Route exact path="/category/All" component={CategoryPage}></Route>
            <PrivateRoute path="/admin/user" component={UserAdminPage}/>
            <PrivateRoute  path='/admin' component={AdminPage}/>
            <PrivateRoute path='/admin/course' component={CourseAdminPage}/>
            <Route exact path="*" component={Page404}></Route>
         </Switch>
      </Router>
    </>
  );
}

export default App;
