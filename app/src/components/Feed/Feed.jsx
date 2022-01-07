import { getFirestore, onSnapshot, collection } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import '../../styles/Feed.css'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../StoryReel/StoryReel'
import db from '../Firebase/firebase'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // db.collection('posts').

    onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post, index) => (
        <Post
          key={index}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default Feed
