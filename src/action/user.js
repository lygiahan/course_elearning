import { instance } from "../config";
import { loginSer, registerSer,ghiDanhSer, infoUserSer, updateUserSer, infoTaiKhoan } from "../services/user"
import { ReduxThunk } from "./course";
import {  ADMIN_LOGIN__BEGIN, ADMIN_LOGIN__SUCCESS, INFO_USER_BEGIN, INFO_USER_FAIL, INFO_USER_SUCCESS, UPDATE_USER_BEGIN, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS, USER_GHIDANH_BEGIN, USER_GHIDANH_FAIL, USER_GHIDANH_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from "./type";
import { ToastCompo } from "../component/ToastCompo";

export const registerAct =(user)=>{
    return async dispatch =>{
      try {
        let res = await registerSer(user);
        console.log(res);
      } catch (error) {
          dispatch(ReduxThunk(USER_REGISTER_FAIL,error));
      }
    }
}

export const loginAct = (user,history) =>{
  return async dispatch =>{
       try {
         dispatch({type:ADMIN_LOGIN__BEGIN});
        let res = await loginSer(user);
        if(res.status === 200){
          ToastCompo('success','Đăng nhập thành công!')
          instance.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
          if(res.data.maLoaiNguoiDung ==='HV'){
            localStorage.setItem('token',JSON.stringify(res.data.accessToken));
            localStorage.setItem('tk',JSON.stringify(res.data.taiKhoan));
            localStorage.setItem('maloai',JSON.stringify(res.data.maLoaiNguoiDung));
            localStorage.setItem('userlogin',JSON.stringify(res.data));
            dispatch(ReduxThunk(USER_LOGIN_SUCCESS,res.data));
            history.push('/');
          }
          else{
            localStorage.setItem('token',JSON.stringify(res.data.accessToken));
            localStorage.setItem('tk',JSON.stringify(res.data.taiKhoan));
            localStorage.setItem('maloai',JSON.stringify(res.data.maLoaiNguoiDung));
            localStorage.setItem('adminlogin',JSON.stringify(res.data));
            dispatch(ReduxThunk(ADMIN_LOGIN__SUCCESS,res.data))
            history.push('/admin');

          }
           
        }
       } catch (error) {
         dispatch(ReduxThunk(USER_LOGIN_FAIL,error));
         ToastCompo('fail','Tài Khoản hoặc mật khẩu không đúng');
       }
  }
}

export const logoutAct =(history)=>{
  return async dispatch =>{ 
        dispatch(ReduxThunk(USER_LOGOUT,[]));
        ToastCompo('success',"Đăng xuất thành công")
        history.push('/')
  }
}


export const infoUserAct =()=>{
  return async dispatch =>{
    try {
      dispatch({type:INFO_USER_BEGIN});
      let res = await infoUserSer();
      dispatch(ReduxThunk(INFO_USER_SUCCESS,res.data));
    } catch (error) {
     dispatch({type:INFO_USER_FAIL});
    }
  }
}

export const updateUserAct =(update)=>{
  return async dispatch =>{
     try {
      dispatch({type:UPDATE_USER_BEGIN})
      let res  = await updateUserSer(update);
      if(res.status ===200){
        ToastCompo('success','Cập nhật thông tin thành công');
      }
       dispatch(ReduxThunk(UPDATE_USER_SUCCESS,res.data))
     } catch (error) {
       ToastCompo('fail','Cập nhật thất bại')
       dispatch(ReduxThunk(UPDATE_USER_FAIL,error))
     }
  }
}

export const ghiDanh =(data)=>{
  return async dispatch =>{
      try {
        dispatch({type:USER_GHIDANH_BEGIN});
        let res = await ghiDanhSer(data);
        if(res.status === 200){
          ToastCompo('success',res.data);
        }
        console.log(res);
        dispatch(ReduxThunk(USER_GHIDANH_SUCCESS,res.data));
      } catch (error) {
        ToastCompo('fail','Hệ thống lỗi, mong các bạn quay lại sau')
        dispatch(ReduxThunk(USER_GHIDANH_FAIL,error));
        
      }
  }
}
