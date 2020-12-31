import { ADD_CARD_BEGIN, ADD_CARD_SUCCESS, DELETE_CARD_SUCCESS } from "../../action/type";
import {ToastCompo} from "../../component/ToastCompo";

let initialState = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];

export const CartReducer =(state = initialState,action)=>{
    switch (action.type) {   
 
      case ADD_CARD_SUCCESS:{
        let  card= state.findIndex(item=>item.maKhoaHoc === action.data.maKhoaHoc);
        if(card === -1){             
            localStorage.setItem('cart',JSON.stringify([...state,action.data]))
            return[...state,action.data]
        }
        else{
            ToastCompo('warning','Bạn Đã thêm khóa học');
        }
       
      }
        
      case DELETE_CARD_SUCCESS:{
        let newa = state.filter(item=>item.maKhoaHoc !== action.data);

        localStorage.setItem('cart',JSON.stringify(newa));      

        state = JSON.parse(localStorage.getItem('cart'));
        return [...state]
      }
         

        default:
            return state;
    }
}