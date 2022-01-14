import { Avatar, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import '../../styles/MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useStateValue } from '../StateProvider/StateProvider'
import db from '../Firebase/firebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

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
      <form>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="top"
          container
          sx={{ mt: 5, mb: 2 }}
        >
          <Grid sx={{ ml: 5, mr: 1, mt: 1, mb: 2 }}>
            <Avatar src="" />
          </Grid>
          <Grid xs={6} sx={{ ml: 5, mr: 5, mt: 1, mb: 2 }}>
            <TextField
              color="primary"
              style={{ width: '100%' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="messageSender__input"
              placeholder={`What's up, nameuser`}
              variant="standard"
            />
          </Grid>
          <Grid xs={2} sx={{ ml: 5, mr: 5, mt: 1, mb: 2 }}>
            {' '}
            <TextField
              variant="filled"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="image URL (optionnal)"
            />
          </Grid>
        </Grid>
      </form>
      <div className="messageSender__bottom">
        <button type="submit" onClick={''} className="button">
          Send Good Vibes !
        </button>
      </div>
    </div>
  )
}

export default MessageSender
