import { ReduxThunk } from "./course"
import { ADD_CARD_BEGIN, ADD_CARD_SUCCESS, DELETE_CARD_FAIL, DELETE_CARD_SUCCESS } from "./type"


export const addCart = (data)=>{
    return async dispatch =>{
     try {
        dispatch(ReduxThunk(ADD_CARD_SUCCESS,data));

     } catch (error) {
        dispatch(ReduxThunk(ADD_CARD_SUCCESS,error));

     }         
    }
}

export const deleteCart =(data)=>{
    return async dispatch =>{
       try {
           dispatch(ReduxThunk(DELETE_CARD_SUCCESS,data));
       } catch (error) {
          dispatch(ReduxThunk(DELETE_CARD_FAIL,error));
       }
    }
}