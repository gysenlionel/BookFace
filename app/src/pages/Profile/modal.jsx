import React from 'react'
/* import '../Profile/modal.css' */
import { useStateValue } from './../../components/StateProvider/StateProvider'
import { Avatar, IconButton } from '@material-ui/core'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const Modal = ({ setIsOpen }) => {
  // const [{ user }, dispatch] = useStateValue()
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
            sx={{ margin: 2 }}
          >
            <Avatar
              src=""
              style={{
                margin: '10px',
                width: '150px',
                height: '150px',
              }}
            />
            <h1> Welcome: Name</h1>
          </Grid>
          {/*  <button
            className="closeBtn"
            onClick={() => setIsOpen(false)}
          ></button> */}

          <Box
            className="Name"
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <h2>Edit Name : </h2>
            <TextField
              className="field"
              id="Firstname"
              label="FirstName"
              placeholder="Firstname"
              multiline
            />
            <TextField
              className="field"
              id="Lastname"
              label="LastName"
              placeholder="Lastname"
              multiline
            />
          </Box>

          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="saveBtn" onClick={() => setIsOpen(false)}>
                Save
              </button>
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
