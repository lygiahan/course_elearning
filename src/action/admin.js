import { getUserSer } from "../services/admin"
import { ReduxThunk } from "./course";
import { GET_USER_BEGIN, GET_USER_FAIL, GET_USER_SUCCESS } from "./type";




export const getUserAct=()=>{
    return async dispatch =>{
         try {
             dispatch({type:GET_USER_BEGIN})
            let res = await getUserSer();
             dispatch(ReduxThunk(GET_USER_SUCCESS,res.data));
         } catch (error) {
             dispatch(ReduxThunk(GET_USER_FAIL,error));
         }
    }
}