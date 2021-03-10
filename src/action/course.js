import { getCourseSer,getCategorySer,filterCourseSer,detailCourseSer, searchCourse, getCoursePagiSer, getCheckedTypeCourseSer, getCategoryPage } from "../services/course"
import { GET_CATEGORY_COURSE_FAIL,GET_CATEGORY_COURSE_BEGIN, GET_CATEGORY_COURSE_SUCCESS, GET_COURSE_BEGIN, GET_COURSE_FAIL, GET_COURSE_SUCCESS, FILTER_COURSE_SUCCESS, FILTER_COURSE_FAIL, DETAIL_COURSE_BEGIN, DETAIL_COURSE_SUCCESS, DETAIL_COURSE_FAIL, GET_COURSE_PAGINATE_BEGIN, GET_COURSE_PAGINATE_SUCCESS, GET_COURSE_PAGINATE_ERROR, CHECK_AUTHOR_SUCCESS, CHECK_AUTHOR_BEGIN, CHECK_TYPE_COURSE_BEGIN, CHECK_TYPE_COURSE_SUCCESS, CHECK_TYPE_COURSE_FAIL, GET_COURSE_CATEGORY_PAGE_BEGIN, GET_COURSE_CATEGORY_PAGE_SUCCESS, GET_COURSE_CATEGORY_PAGE_FAIL } from "./type"

  export const ReduxThunk =(type,data) =>{
      return {
          type,data
      }
  }

export const getCourseAct=()=>{
    return async dispatch =>{
        try {
           dispatch({type:GET_COURSE_BEGIN});
           let res = await getCourseSer();
           dispatch(ReduxThunk(GET_COURSE_SUCCESS,res.data));
        } catch (error) {
            dispatch(ReduxThunk(GET_COURSE_FAIL,error));
        }
    }
}
  export const getCoursePagi=(page)=>{
      return async dispatch=>{
          try {
              dispatch({type:GET_COURSE_PAGINATE_BEGIN})
              let res = await getCoursePagiSer(page);
              dispatch(ReduxThunk(GET_COURSE_PAGINATE_SUCCESS,res.data.items))
          } catch (error) {
              dispatch(ReduxThunk(GET_COURSE_PAGINATE_ERROR,error))
          }
      }
  }

export const getCategoryCourseAct =()=>{
    return async dispatch =>{
        try {
            dispatch({type:GET_CATEGORY_COURSE_BEGIN})
            let res = await getCategorySer();
            dispatch(ReduxThunk(GET_CATEGORY_COURSE_SUCCESS,res.data))
        } catch (error) {
            dispatch(ReduxThunk(GET_CATEGORY_COURSE_FAIL,error))
        }
    }
}

export const filterCourse =(madanhmuc)=>{
    return async dispatch =>{
        try {
            let res = await filterCourseSer(madanhmuc);
              dispatch(ReduxThunk(FILTER_COURSE_SUCCESS,res.data));
        } catch (error) {
              dispatch(ReduxThunk(FILTER_COURSE_FAIL,error))
        }
    }
}

export const searchCourseAct=(search)=>{
    return async dispatch =>{
        let res= await searchCourse(search);
    }
}

export const detailCourse =(ma)=>{
    return async dispatch =>{
       try {
        dispatch({type:DETAIL_COURSE_BEGIN});
        let res = await detailCourseSer(ma);

        dispatch(ReduxThunk(DETAIL_COURSE_SUCCESS,res.data));
       } catch (error) {
           dispatch(ReduxThunk(DETAIL_COURSE_FAIL,error));
       }

    }
}


/** Sidebar Author */

export const checkAuthorAct =(data)=>{
    return async dispatch =>{
        try {
            dispatch({type:CHECK_AUTHOR_BEGIN});
            dispatch(ReduxThunk(CHECK_AUTHOR_SUCCESS,data))
        } catch (error) {
            
        }
    }
}


/**Sidebar  Type Course */

export const checkTypeCourseAct =(data)=>{
    return async dispatch =>{
        try {
            dispatch({type:CHECK_TYPE_COURSE_BEGIN});
            let res =await getCheckedTypeCourseSer(data);
            dispatch(ReduxThunk(CHECK_TYPE_COURSE_SUCCESS,res.data))
        } catch (error) {
            dispatch(ReduxThunk(CHECK_TYPE_COURSE_FAIL,error))

        }
    }
}


/**Category page */


export const getCourseCategoryAct =(category)=>{
   return async dispatch=>{
       try {
           dispatch({type:GET_COURSE_CATEGORY_PAGE_BEGIN})
           let res = await getCategoryPage(category);
           dispatch(ReduxThunk(GET_COURSE_CATEGORY_PAGE_SUCCESS,res.data));
       } catch (error) {
        dispatch(ReduxThunk(GET_COURSE_CATEGORY_PAGE_FAIL,error));

       }
   }
}