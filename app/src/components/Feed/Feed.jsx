import { getFirestore, onSnapshot, collection } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import '../../styles/Feed.css'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../StoryReel/StoryReel'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post.actions'
import { isEmpty } from '@firebase/util'

const Feed = () => {
  // state du post
  const [loadPost, setLoadPost] = useState(true)
  // compteur de post pour infinite scroll
  const [count, setCount] = useState(5)
  //   permet d'envoyé une action
  const dispatch = useDispatch()
  //   une fois l'action lancé, récupéré les valeurs dans un store
  const posts = useSelector((state) => state.postReducer)

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true)
    }
  }

  // chargement des post
  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts(count))
      setLoadPost(false)
      // pour le prochain scroll on fait un + 5
      setCount(count + 5)
    }

    // infinite scroll quand on est en bas de page
    window.addEventListener('scroll', loadMore)
    return () => window.removeEventListener('scroll', loadMore)
  }, [loadPost, dispatch, count])

  return (
    <div className="feed">
      {/*   <StoryReel /> */}
      <MessageSender />
      {/* map de toutes les données post */}
      {!isEmpty(posts[0]) &&
        posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  )
}

export default Feed
