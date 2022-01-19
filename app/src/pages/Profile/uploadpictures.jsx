import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadPicture } from '../../actions/user.actions'
import { Button, Grid } from '@mui/material'
import './../../styles/uploadpictures.css'
import { Box } from '@material-ui/core'

function Uploadpictures() {
  /*  const [uploadfile, setuploadfile] = useState(true)
  const [send, setsend] = useState(false)

  const handlemodal = (e) => {
    const { id } = e.target

    if (id == 'upload') {
      setuploadfile((prevValue) => {
        return !prevValue
      })
      setsend(true)
    }
  } */

  const [file, setFile] = useState()
  const dispatch = useDispatch()

  const userData = useSelector((state) => state.userReducer)
  const handlePicture = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', userData.pseudo)
    data.append('userId', userData._id)
    data.append('file', file)
    dispatch(uploadPicture(data, userData._id))
  }

  return (
    <div>
      <form action="" onSubmit={handlePicture}>
        <Grid
          xs={12}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid sx={{ ml: 1, mr: 1 }}>
            <Button
              id="upload"
              className="button1"
              variant="contained"
              component="label"
              sx={{ mt: 3, mb: 2, ml: 5, mr: 5 }}
            >
              Upload File
              <input
                type="file"
                hidden
                name="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>
          </Grid>
          <Grid>
            <Button className="button2" variant="contained" component="label">
              SEND
              <input hidden type="submit" value="send" />
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Uploadpictures
