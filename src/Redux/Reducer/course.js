import {
  DETAIL_COURSE_BEGIN,
  DETAIL_COURSE_SUCCESS,
  FILTER_COURSE_SUCCESS,
  GET_CATEGORY_COURSE_BEGIN,
  GET_CATEGORY_COURSE_FAIL,
  GET_CATEGORY_COURSE_SUCCESS,
  GET_COURSE_BEGIN,
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
  detail: {},
  paginateCourse: [],
  loadingpaginate: false,
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
      return { ...state, loadingDetail: false, detail: action.data };

    case GET_COURSE_PAGINATE_BEGIN:
      return { ...state, loadingpaginate: true };

    case GET_COURSE_PAGINATE_SUCCESS:
        console.log(action.data);
      return { ...state, loadingpaginate: false, paginateCourse: action.data};
      
    case GET_COURSE_PAGINATE_ERROR:
      return { ...state, loading: false, paginateCourse: action.data };
    default:
      return state;
  }
};
