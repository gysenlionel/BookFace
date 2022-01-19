import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import '../../styles/Post.css'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import NearMeIcon from '@mui/icons-material/NearMe'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import Spinner from '../Spinner/Spinner'
import { useSelector } from 'react-redux'
import { isEmpty } from '@firebase/util'
import LikeButton from './LikeButton'
import { dateParser } from '../../utils/date'
const Post = ({ post }) => {
  // spinner
  const [isLoading, setIsLoading] = useState(true)

  // db des users pour les likes photo...
  const usersData = useSelector((state) => state.usersReducer)
  // data du client
  const userData = useSelector((state) => state.userReducer)

  // useEffect pour le spinner
  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false)
  }, [usersData])
  return (
    <div className="post">
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="post__top">
            <Avatar
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture
                    else return null
                  })
                  .join('')
              }
              className="post__avatar"
            />
            <div className="post__topInfo">
              <h3>
                {!isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === post.posterId) return user.pseudo
                      else return null
                    })
                    .join('')}
              </h3>
              <p>{dateParser(post.createdAt)}</p>
            </div>
          </div>

          <div className="post__bottom">
            <p>{post.message}</p>
          </div>

          <div className="post__image">
            {post.picture && <img src={post.picture} alt="pic" />}
          </div>

          <div className="post__video">
            {post.video && (
              <iframe
                width="100%"
                height="315"
                src={post.video}
                title="youtube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="post__options">
            <LikeButton post={post} />

            <div className="post__option">
              <ChatBubbleIcon />
              <p>
                {' '}
                {post.comments.length === 0 ? 'Comment' : post.comments.length}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Post
