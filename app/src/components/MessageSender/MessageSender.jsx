import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import '../../styles/MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useStateValue } from '../StateProvider/StateProvider'
import db from '../Firebase/firebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

const MessageSender = () => {
  // const [{ user }, dispatch] = useStateValue()
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // db.collection('posts').add({
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: imageUrl,
    // })

    setInput('')
    setImageUrl('')
  }
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's up, nameuser`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (optionnal)"
          />
          <button onClick={handleSubmit} type="submit">
            {' '}
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'green' }} />
          <h3>Freeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
