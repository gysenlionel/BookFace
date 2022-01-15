import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadPicture } from '../../actions/user.actions'
import { Button } from '@mui/material'
import './../../styles/uploadpictures.css'

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
        {/*  {uploadfile && ( */}
        <Button
          id="upload"
          className="button1"
          variant="contained"
          component="label"
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
        {/*   )} */}
        {/*   {send && ( */}
        <Button className="button2" variant="contained" component="label">
          SEND
          <input hidden type="submit" value="send" />
        </Button>
        {/*  )} */}
      </form>
    </div>
  )
}

export default Uploadpictures
