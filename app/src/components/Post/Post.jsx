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
const Post = ({ profilePic, image, username, timestamp, message }) => {
  // spinner
  const [isLoading, setIsLoading] = useState(true)

  // db des users pour les likes photo...
  const usersData = useSelector((state) => state.usersReducer)
  // data du client
  const userData = useSelector((state) => state.userReducer)

  // useEffect(() => {
  //   !isEmpty(usersData[0]) && setIsLoading(false)
  // }, [usersData])
  return (
    <div className="post">
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
      <>
        <div className="post__top">
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{timestamp}</p>
          </div>
        </div>

        <div className="post__bottom">
          <p>{message}</p>
        </div>

        <div className="post__image">
          <img src={image} alt="" />
        </div>

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
      {/* )} */}
    </div>
  )
}

export default Post
