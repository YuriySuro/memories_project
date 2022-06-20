import * as C from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case C.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case C.END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case C.FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case C.FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case C.FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case C.CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case C.UPDATE:
    case C.LIKE:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
      };
    case C.DELETE:
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
    case C.COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    default:
      return state;
  }
};
