import { getFirestore, onSnapshot, collection } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import '../../styles/Feed.css'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../StoryReel/StoryReel'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post.actions'
import { isEmpty } from '@firebase/util'
import { dateParser } from '../../utils/date'

const Feed = () => {
  // state du post
  const [loadPost, setLoadPost] = useState(true)
  //   permet d'envoyé une action
  const dispatch = useDispatch()
  //   une fois l'action lancé, récupéré les valeurs dans un store
  const posts = useSelector((state) => state.postReducer)
  // chargement des post
  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts())
      setLoadPost(false)
    }
  }, [loadPost, dispatch])

  return (
    <div className="feed">
      {/*   <StoryReel /> */}
      <MessageSender />
      {/* map de toutes les données post */}
      {!isEmpty(posts[0]) &&
        posts.map((post) => (
          <Post
            key={post._id}
            post={post.posterId}
            message={post.message}
            timestamp={dateParser(post.createdAt)}
            image={post.picture}
            video={post.video}
          />
        ))}
    </div>
  )
}

export default Feed
