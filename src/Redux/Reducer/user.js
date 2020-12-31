import { INFO_USER_BEGIN, INFO_USER_FAIL, INFO_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS ,UPDATE_USER_BEGIN, USER_LOGOUT, USER_GHIDANH_BEGIN, USER_GHIDANH_SUCCESS, USER_GHIDANH_FAIL} from "../../action/type";

let initialState ={
    userlogin:false,
    crentialUser:null,
    loadingInfo:false,
    infoUser:null,
    loadingUpdate:false,
    updateUser:null,
    loadingGhiDanh:false,
    ghidanh:[]
}

export const UserReducer =(state = initialState,action)=>{
    switch (action.type) {
      case USER_REGISTER_SUCCESS:

      case USER_REGISTER_FAIL:

      case USER_LOGIN_SUCCESS:
         return {...state,crentialUser:action.data,userlogin:true}

      case USER_LOGOUT:
          localStorage.removeItem('tk');
          localStorage.removeItem('userlogin');
          localStorage.removeItem('adminlogin');

          localStorage.removeItem('token');
          localStorage.removeItem('maloai');

          return {...state,userlogin:null};  
      
      case INFO_USER_BEGIN:
          return {...state,loadingInfo:true}
      
      case INFO_USER_SUCCESS:
          return{...state,loadingInfo:false,infoUser:action.data};

      case INFO_USER_FAIL:
          return{...state,loading:true};

      case UPDATE_USER_BEGIN:
          return {...state,loadingUpdate:true}    

      case UPDATE_USER_SUCCESS:
      
          return{...state,loadingUpdate:false,updateUser:action.data}
          
      case UPDATE_USER_FAIL:
          return{...state}
       
       case USER_GHIDANH_BEGIN:
           return {...state,loadingGhiDanh:true};

        case USER_GHIDANH_SUCCESS:
           return {...state,ghidanh:action.data,loadingGhiDanh:false};

        case USER_GHIDANH_FAIL:
            return{...state,loadingGhiDanh:true};


        default:
           return state;
    }
}