import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const LIKE_POST = 'LIKE_POST'
export const UNLIKE_POST = 'UNLIKE_POST'
// erreurs
export const GET_POST_ERRORS = 'GET_POST_ERRORS'
// num pour infinite scroll
export const getPosts = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/post`)
      .then((res) => {
        // prend les 5 premiers et coupe tout le reste (infinite scroll)
        const array = res.data.slice(0, num)
        dispatch({ type: GET_POSTS, payload: array })
      })
      .catch((err) => console.log(err))
  }
}

export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/post`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_POST_ERRORS, payload: res.data.errors })
        }
      })
  }
}
export const likePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: LIKE_POST, payload: { postId, userId } })
      })
      .catch((err) => console.log(err))
  }
}

export const unlikePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNLIKE_POST, payload: { postId, userId } })
      })
      .catch((err) => console.log(err))
  }
}
