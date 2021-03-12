import {
  CHECK_AUTHOR_BEGIN,
  CHECK_AUTHOR_FAIL,
  CHECK_AUTHOR_SUCCESS,
  CHECK_TYPE_COURSE_BEGIN,
  CHECK_TYPE_COURSE_FAIL,
  CHECK_TYPE_COURSE_SUCCESS,
  DETAIL_COURSE_BEGIN,
  DETAIL_COURSE_SUCCESS,
  FILTER_COURSE_SUCCESS,
  GET_CATEGORY_COURSE_BEGIN,
  GET_CATEGORY_COURSE_FAIL,
  GET_CATEGORY_COURSE_SUCCESS,
  GET_COURSE_BEGIN,
  GET_COURSE_CATEGORY_PAGE_BEGIN,
  GET_COURSE_CATEGORY_PAGE_FAIL,
  GET_COURSE_CATEGORY_PAGE_SUCCESS,
  GET_COURSE_FAIL,
  GET_COURSE_PAGINATE_BEGIN,
  GET_COURSE_PAGINATE_ERROR,
  GET_COURSE_PAGINATE_SUCCESS,
  GET_COURSE_SUCCESS,
} from "../../action/type";

let initialCourse = {
  courses: [],
  loading: false,
  loadingFilter: false,
  filtercourse: [],
  filter: [],
  loadingDetail: false,
  detail: null,
  paginateCourse: [],
  loadingpaginate: false,
  loadingCheckAuthor:false,
  recentCourse:[],
  loadingCategory:false,
  categoryPage:[]

};

export const CourseReducer = (state = initialCourse, action) => {
  switch (action.type) {
    case GET_COURSE_BEGIN:
      return { ...state, loading: true };

    case GET_COURSE_SUCCESS:
      return { ...state, courses: action.data, loading: false };

    case GET_COURSE_FAIL:
      return { ...state, courses: [], loading: false };

    case GET_CATEGORY_COURSE_BEGIN:
      return { ...state, loadingFilter: true };

    case GET_CATEGORY_COURSE_SUCCESS:
      return { ...state, filtercourse: action.data };

    case GET_CATEGORY_COURSE_FAIL:
      return { ...state, filtercourse: [] };

    case FILTER_COURSE_SUCCESS:
      return { ...state, courses: action.data };

    case DETAIL_COURSE_BEGIN:
      return { ...state, loadingDetail: true };

    case DETAIL_COURSE_SUCCESS:
      return { ...state, loadingDetail: false, detail: action.data ,recentCourse:action.data};

    case GET_COURSE_PAGINATE_BEGIN:
      return { ...state, loadingpaginate: true };

    case GET_COURSE_PAGINATE_SUCCESS:
      return { ...state, loadingpaginate: false, paginateCourse: action.data};
      
    case GET_COURSE_PAGINATE_ERROR:
      return { ...state, loading: false, paginateCourse: action.data };

    case CHECK_AUTHOR_BEGIN:
      return {...state,loadingCheckAuthor:true}

    case CHECK_AUTHOR_SUCCESS:
            let newcourse = state.courses.filter(item=>item.nguoiTao.hoTen == action.data);
      return {...state,loadingCheckAuthor:false,paginateCourse:newcourse}

      case CHECK_AUTHOR_FAIL:


      case CHECK_TYPE_COURSE_BEGIN:

      return {...state,loadingFilter:true}

      case CHECK_TYPE_COURSE_SUCCESS:

                  return {...state,loadingFilter:false,paginateCourse:action.data}
      case CHECK_TYPE_COURSE_FAIL:
        return {...state,loadingFilter:true}


     case GET_COURSE_CATEGORY_PAGE_BEGIN:
       return {...state,loadingCategory:true}
       
     case GET_COURSE_CATEGORY_PAGE_SUCCESS:

     return {...state,loadingCategory:false,categoryPage:action.data}
     case GET_COURSE_CATEGORY_PAGE_FAIL:

    default:
      return state;
  }
};
