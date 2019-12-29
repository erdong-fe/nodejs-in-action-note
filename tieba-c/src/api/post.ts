import axios from '../utils/http';
import post from '../types/post';


const createPost = (params: post.toCreate) => {
  return axios.post('/v1/posts', params);
};

const getPostList = () => {
  return axios.get('/v1/posts/all');
};

export {
  createPost,
  getPostList,
};
