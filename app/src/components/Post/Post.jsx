import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import '../../styles/Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import NearMeIcon from '@mui/icons-material/NearMe'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import Spinner from '../Spinner/Spinner'
import { useSelector } from 'react-redux'
import { isEmpty } from '@firebase/util'
const Post = ({ post, timestamp, message, image, video }) => {
  // spinner
  const [isLoading, setIsLoading] = useState(true)

  // db des users pour les likes photo...
  const usersData = useSelector((state) => state.usersReducer)
  // data du client
  const userData = useSelector((state) => state.userReducer)
  // data comments
  const commentsData = useSelector((state) => state.postReducer)
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
                    if (user._id === post) return user.picture
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
                      if (user._id === post) return user.pseudo
                    })
                    .join('')}
              </h3>
              <p>{timestamp}</p>
            </div>
          </div>

          <div className="post__bottom">
            <p>{message}</p>
          </div>

          <div className="post__image">
            {image && <img src={image} alt="pic" />}
          </div>
          {video && (
            <iframe
              width="560"
              height="315"
              src={video}
              title={commentsData._id}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          <div className="post__options">
            <div className="post__option">
              <ThumbUpIcon />
              <p>Feel</p>
            </div>

            <div className="post__option">
              <ChatBubbleIcon />
              <p>Comment</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Post
