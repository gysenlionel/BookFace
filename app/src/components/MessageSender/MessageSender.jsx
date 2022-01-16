import { Avatar, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../../styles/MessageSender.css'
import Grid from '@mui/material/Grid'
import { Box } from '@material-ui/core'
import TextField from '@mui/material/TextField'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { isEmpty } from '@firebase/util'
import RenderMessage from './RenderMessage'
import { useDispatch } from 'react-redux'
import { addPost, getPosts } from '../../actions/post.actions.jsx'
const MessageSender = () => {
  const [message, setMessage] = useState('')
  const [postPicture, setPostPicture] = useState(null)
  const [video, setVideo] = useState('')
  const [file, setFile] = useState()
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  // reducer pour aller chercher les erreurs quand format trop gros
  const error = useSelector((state) => state.errorReducer.postError)
  const handlePost = async () => {
    if (message || postPicture || video) {
      const data = new FormData()
      data.append('posterId', userData._id)
      data.append('message', message)
      if (file) {
        data.append('file', file)
      }
      data.append('video', video)
      // dispatch la data
      await dispatch(addPost(data))
      // on demande de renvoyé les posts
      dispatch(getPosts())
      cancelPost()
    } else {
      alert('Veuillez entrer un message')
    }
  }

  const handlePicture = (e) => {
    // prévisuliation de l'image
    setPostPicture(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
    setVideo('')
  }

  const cancelPost = () => {
    setMessage('')
    setPostPicture('')
    setVideo('')
    setFile('')
  }
  // analyse du message pour voir si lien youtube

  useEffect(() => {
    const handleVideo = () => {
      let findLink = message.split(' ')
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes('https://www.yout') ||
          findLink[i].includes('https://yout')
        ) {
          let embed = findLink[i].replace('watch?v=', 'embed/')
          setVideo(embed.split('&')[0])
          // enlever le lien de l'input quand on le glisse dedans
          findLink.splice(i, 1)
          setMessage(findLink.join(' '))
          // si il y a une video on enlève la photo pas d'envoi photo video en même temps
          setPostPicture('')
        }
      }
    }
    handleVideo()
  }, [message, video])
  return (
    <>
      <div className="messageSender">
        <form>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="top"
            sx={{ mt: 5, mb: 2 }}
          >
            <Grid sx={{ ml: 5, mr: 1, mt: 1, mb: 2 }}>
              <NavLink to="/profil">
                <Avatar src={userData.picture} />
              </NavLink>
            </Grid>
            <Grid xs={6} sx={{ ml: 5, mr: 5, mt: 1, mb: 2 }}>
              <TextField
                color="primary"
                style={{ width: '100%' }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="messageSender__input"
                placeholder={`What's up, ${userData.pseudo}`}
                variant="standard"
                multiline={true}
              />
            </Grid>
            <Grid xs={2} sx={{ ml: 5, mr: 5, mt: 1, mb: 2 }}>
              {isEmpty(video) && (
                <>
                  <AddPhotoAlternateIcon />
                  <input
                    type="file"
                    id="file-upload"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => handlePicture(e)}
                    className="messageSender__pictureInput"
                  />
                </>
              )}
              {video && (
                <Grid item>
                  <Box sx={{ justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => setVideo('')}
                      className="messageSender__deleteVideo"
                    >
                      Supprimer la vidéo
                    </button>
                  </Box>
                </Grid>
              )}
            </Grid>
            {message || postPicture || video.length > 20 ? (
              <RenderMessage
                message={message}
                postPicture={postPicture}
                video={video}
              />
            ) : null}
          </Grid>
        </form>
        <Grid
          container
          direction="row"
          justifyContent="center"
          flex="wrap"
          alignItems="center"
          sx={{ mt: 5, mb: 2 }}
        >
          <Grid xs={12}>
            <div className="messageSender__bottom">
              {message || postPicture || video.length > 20 ? (
                <Box xs={4} sx={{ ml: 5, mr: 5, mt: 1, mb: 2 }}>
                  <button
                    className="messageSender__button -cancel"
                    onClick={cancelPost}
                  >
                    Cancel
                  </button>
                </Box>
              ) : null}
              <Box xs={2} sx={{ justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  onClick={handlePost}
                  className="messageSender__button"
                >
                  Send
                </button>
              </Box>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default MessageSender
