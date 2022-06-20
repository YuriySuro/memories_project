import * as api from '../api/index';
import * as constants from '../constants/actionTypes';

// Action Creators
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: constants.START_LOADING });
    const { data } = await api.fetchPosts(page);
    dispatch({ type: constants.FETCH_ALL, payload: data });
    dispatch({ type: constants.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: constants.START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: constants.FETCH_BY_SEARCH, payload: data });
    dispatch({ type: constants.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({ type: constants.FETCH_POST, payload: data });
    dispatch({ type: constants.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: constants.START_LOADING });
    const { data } = await api.createPost(post);
    history.push(`/posts/${data._id}`);
    dispatch({ type: constants.CREATE, payload: data });
    dispatch({ type: constants.END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: constants.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: constants.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: constants.LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (finalComment, id) => async (dispatch) => {
  try {
    const { data } = await api.commentPost(finalComment, id);
    dispatch({ type: constants.COMMENT, payload: data });
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
