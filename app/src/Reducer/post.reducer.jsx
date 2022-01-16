import { GET_POSTS, LIKE_POST, UNLIKE_POST } from '../actions/post.actions'

const initialState = {}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload

    case LIKE_POST:
      // map pour identifier le message en question
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            // on ajouter l'user id de la personne et on ajoute les likers qu'il y avait déja pour ne pas les écrasé!!
            likers: [action.payload.userId, ...post.likers],
          }
        }
        // si pas dans la condition return le post !!!
        return post
      })

    case UNLIKE_POST:
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            // fiter pour retiré userId du tableau
            likers: post.likers.filter((id) => id !== action.payload.userId),
          }
        }
        // return le post !!!!
        return post
      })

    default:
      return state
  }
}
