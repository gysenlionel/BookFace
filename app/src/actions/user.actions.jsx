import axios from 'axios'

// table des matières de toutes les actions
export const GET_USER = 'GET_USER'

export const getUser = (uid) => {
  // le dispatch est ce que l'on envoie au reducer
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}
