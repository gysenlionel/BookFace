import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import MessageIcon from '@mui/icons-material/Message'
import { Avatar, IconButton } from '@material-ui/core'
import '../../styles/BorisHeader.css'
import { useStateValue } from '../StateProvider/StateProvider.jsx'
import Image from './Untitleddesign-removebg.png' // Import using relative path
import { useNavigate } from 'react-router-dom'
import Modal from '../../pages/Profile/modal'
import Component from 'react'

function refreshPage() {
  window.location.reload(false)
}

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
}

export default function MenuAppBar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false)
  const handleDown = () => {
    navigate('/profil')
    setAnchorEl(null)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // const [{ user }, dispatch] = useStateValue()

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: 60 }}>
      <AppBar position="relative" color="transparent">
        <Toolbar style={styles.paperContainer} className="headerboris">
          <IconButton aria-label="menu" onClick={() => navigate('/')}>
            <img
              className="pictures"
              src={process.env.PUBLIC_URL + '/logo_transparentcenter.png'}
              alt="logo"
            />
          </IconButton>

          <div>
            {/*  EN FULL SCREEN */}
            <Box
              sx={
                ({ ml: 2 },
                { display: { xs: 'none', md: 'none', lg: 'initial' } })
              }
            >
              <IconButton
                size="medium"
                edge="start"
                className="essai"
                aria-label="menu"
                onClick={() => navigate('/')}
              >
                <HomeIcon sx={{ pr: 1 }} />
                <p sx={{ pl: 2 }}> Home </p>
              </IconButton>
              <IconButton
                size="medium"
                edge="start"
                aria-label="menu"
                className="essai"
                sx={{ mr: 5, ml: 5 }}
                onClick={() => navigate('/')}
              >
                <MessageIcon sx={{ pr: 1 }} />
                <p sx={{ pl: 2 }}> Message </p>
              </IconButton>
            </Box>
            {/*  EN Mobile */}
            <Box sx={{ display: { xs: 'initial', md: 'initial', lg: 'none' } }}>
              <IconButton
                size="medium"
                edge="start"
                className="essai"
                aria-label="menu"
                sx={{ mr: 5, ml: 5 }}
                onClick={() => navigate('/')}
              >
                <HomeIcon />
              </IconButton>
              <IconButton
                size="medium"
                edge="start"
                className="essai"
                aria-label="menu"
                sx={{ mr: 5, ml: 5 }}
                onClick={() => navigate('/')}
              >
                <MessageIcon />
              </IconButton>
            </Box>

            <IconButton
              size="small"
              edge="start"
              aria-label="menu"
              sx={{ mr: 5, ml: 5 }}
              onClick={handleMenu}
            >
              <Box sx={{ mr: 1 }}>
                <Avatar src="" />
              </Box>
              <Box>
                <p>name</p>
              </Box>
            </IconButton>

            <Menu
              id="menu-appbar"
              PaperProps={{
                style: {
                  width: 250,
                },
              }}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div className="menu">
                {/* <MenuItem onClick={handleDown}>Profil</MenuItem> */}
                <MenuItem>
                  <button onClick={() => setIsOpen(true)}>Edit Profile</button>
                  {isOpen && <Modal setIsOpen={setIsOpen} />}
                </MenuItem>

                <MenuItem onClick={(refreshPage, handleClose)}>Logout</MenuItem>
              </div>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
