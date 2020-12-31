import { ADMIN_LOGIN__BEGIN, ADMIN_LOGIN__FAIL, ADMIN_LOGIN__SUCCESS, GET_USER_BEGIN, GET_USER_FAIL, GET_USER_SUCCESS } from "../../action/type";


let initialState ={
    loadinglogin:false,
    crentialadmin:null,
    getuser:[],
    loadinggetuser:false
}

export const AdMinReducer =(state = initialState,action)=>{
    switch (action.type) {
        case ADMIN_LOGIN__BEGIN:
            return{...state,loadinglogin:true}
            
        case ADMIN_LOGIN__SUCCESS:
        
        return {...state,loadinglogin:false,crentialadmin:action.data}
        case ADMIN_LOGIN__FAIL:
        
        case GET_USER_BEGIN:
            return{...state,loadinggetuser:true}

        case GET_USER_SUCCESS:
            return {...state,loadinggetuser:false,getuser:action.data}

        case GET_USER_FAIL:
            return {...state}
        default:
            return state;
    }
}