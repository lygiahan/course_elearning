import {combineReducers} from 'redux';
import {CourseReducer} from '../Reducer/course';
import {UserReducer} from '../Reducer/user';
import {CartReducer} from '../Reducer/Cart';
import {AdMinReducer} from '../Reducer/admin';
export default combineReducers({
     CourseReducer,
     UserReducer,
     CartReducer,
     AdMinReducer
})