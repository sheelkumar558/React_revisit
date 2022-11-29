import axios from "axios";
import * as types from "./actionTypes";

const fetchBlogPostsRequest = (payload) => {
  return {
    type: types.FETCH_BLOG_POSTS_REQUEST,
    payload,
  };
};

const fetchBlogPostsSuccess = (payload) => {
  return {
    type: types.FETCH_BLOG_POSTS_SUCCESS,
    payload,
  };
};

const fetchBlogPostsFailure = (payload) => {
  return {
    type: types.FETCH_BLOG_POSTS_FAILURE,
    payload,
  };
};

export const fetchBlogPosts = (payload) => (dispatch) => {
  dispatch(fetchBlogPostsRequest());
  axios
    .get("/blogs")
    .then((r) => dispatch(fetchBlogPostsSuccess(r.data)))
    .then((e) => dispatch(fetchBlogPostsFailure(e.data)));
};
