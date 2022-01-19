import React, { useContext, useEffect, useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { UidContext } from '../AppContext/AppContext'
// popup et son style pour popup vous n'êtes pas connecté
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useDispatch } from 'react-redux'
import { likePost, unlikePost } from '../../actions/post.actions'

const LikeButton = ({ post }) => {
  // like sur false de base
  const [liked, setLiked] = useState(false)
  // récupéré l'id de l'user
  const uid = useContext(UidContext)
  // déclencher la fonction
  const dispatch = useDispatch()

  // function like
  const like = () => {
    dispatch(likePost(post._id, uid))
    setLiked(true)
  }

  // function unlike
  const unlike = () => {
    dispatch(unlikePost(post._id, uid))
    setLiked(false)
  }
  // si le post est like alors il passe a true

  useEffect(() => {
    if (post.likers.includes(uid)) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }, [uid, post.likers, liked])
  return (
    <>
      {uid === null && (
        <Popup
          trigger={
            <div className="post__option">
              <ThumbUpIcon />
              <p>Feel</p>
            </div>
          }
          position={['bottom center', 'bottom right', 'bottom left']}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour liké un post</div>
        </Popup>
      )}

      {uid && liked === false && (
        <div onClick={like} className="post__option">
          <ThumbUpIcon />
          <p>{post.likers.length === 0 ? 'feel' : post.likers.length}</p>
        </div>
      )}
      {uid && liked === true && (
        <div onClick={unlike} className="post__option">
          <ThumbUpIcon color="success" />
          <p> {post.likers.length === 0 ? 'Feel' : post.likers.length}</p>
        </div>
      )}
    </>
  )
}

export default LikeButton
